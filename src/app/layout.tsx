import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NextAuthProvider from "@/providers/nextAuthProvider";
import Header from "@/components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Trendline",
  description: "Next Task Frontend from trendline | Youssef Turkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
