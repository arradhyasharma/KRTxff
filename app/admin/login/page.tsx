"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "addmmin123" && password === "amrit333") {
      localStorage.setItem("krt_admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Galat Username ya Password!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-zinc-900 border border-red-600/30 p-6 rounded-3xl space-y-4">
        <div className="flex flex-col items-center mb-4">
          <Image src="/logo.jpg" alt="Logo" width={60} height={60} className="rounded-xl mb-2" />
          <h2 className="text-lg font-black text-white">ADMIN PORTAL</h2>
        </div>

        {error && <p className="bg-red-950 text-red-300 text-xs p-2 rounded-lg text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
          />
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 rounded-xl text-xs">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

