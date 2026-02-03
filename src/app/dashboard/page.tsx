"use client";

import FormTitle from "@/components/forms/FormTitle";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "@/lib/axios";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          "/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }
    } catch (error) {
      console.error("Logout API error", error);
    } finally {
      localStorage.removeItem("token");
      await signOut({ redirect: false });
      router.push("/login");
    }
  };

  if (status === "loading") {
    return (
      <section className="sec">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </section>
    );
  }

  if (!session) return null;

  return (
    <section className="sec flex-col">
      <FormTitle>Welcome, {session.user?.name || "user"}</FormTitle>

        <Button onClick={handleLogout} className="w-70 cursor-pointer">Logout</Button>
    </section>
  );
};

export default Dashboard;
