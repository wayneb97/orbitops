// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-xl">Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to OrbitOps</h1>
      <p className="text-lg mb-4 text-center">
        Manage your team with real-time tracking, dashboards, and admin tools.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Go to Login
        </Link>
        <Link
          href="/dashboard"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
