import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "@/lib/axios";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await axios.post("/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          console.log("Credentials login response:", response.data);

          if (response.data.status && response.data.data) {
            const user = response.data.data;
            const token = user.token;

            if (!token) {
              console.error("No token in response");
              return null;
            }

            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              image: user.image,
              token: token,
            };
          }

          console.error("Invalid response structure");
          return null;
        } catch (error: any) {
          console.error("LOGIN FAILED:", error.response?.data || error.message);
          return null;
        }
      },
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn callback triggered:", {
        provider: account?.provider,
        userEmail: user.email,
      });

      if (account?.provider === "google") {
        try {
          console.log("Google sign in attempt:", {
            email: user.email,
            name: user.name,
            googleId: user.id,
          });

          try {
            const response = await axios.post("/auth/google", {
              email: user.email,
              name: user.name,
              google_id: user.id,
              image: user.image,
            });

            if (response.data.status) {
              const apiUser = response.data.data;
              user.id = apiUser.id.toString();
              user.token = apiUser.token;
              return true;
            }
          } catch (apiError) {
            console.log("Google API endpoint not available, using fallback");
            user.token = `google_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            return true;
          }

          return false;
        } catch (error) {
          console.error("Google sign in error:", error);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account, profile }) {
      console.log("JWT callback:", {
        tokenEmail: token.email,
        userId: user?.id,
        provider: account?.provider,
      });

      // Initial sign in
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };

        // Set token based on provider
        if (account?.provider === "credentials" && (user as any).token) {
          token.accessToken = (user as any).token;
          token.provider = "credentials";
        } else if (account?.provider === "google") {
          token.accessToken =
            (user as any).token || `google_${token.sub}_${Date.now()}`;
          token.provider = "google";
        }
      }

      return token;
    },

    async session({ session, token }) {
      console.log("Session callback:", {
        sessionUser: session.user?.email,
        tokenUser: token.user?.email,
      });

      if (token.user) {
        session.user = {
          id: token.user.id,
          name: token.user.name || null,
          email: token.user.email || null,
          image: token.user.image || null,
        };

        session.accessToken = token.accessToken as string;
        session.provider = token.provider as string;
      }

      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login?error=AccessDenied",
  },

  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
