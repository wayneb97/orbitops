"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const supabase = createClient();

  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleClockInOut = async () => {
    if (!pin) {
      setMessage("Please enter your PIN.");
      return;
    }

    const { data, error } = await supabase.rpc("clock_in_out", {
      user_pin: pin,
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage(data.message || "Success!");
    }

    setPin("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Clock In / Out</h1>

      <input
        type="password"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-64 text-center text-lg"
      />

      <button
        onClick={handleClockInOut}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg"
      >
        Submit
      </button>

      {message && (
        <div className="mt-4 text-center text-md text-gray-700">{message}</div>
      )}
    </main>
  );
}
