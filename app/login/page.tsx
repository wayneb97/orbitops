import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert("Check your email for the magic link!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="p-2 border rounded w-full max-w-sm"
      />
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-black text-white rounded">
        Login / Signup
      </button>
    </div>
  );
}
