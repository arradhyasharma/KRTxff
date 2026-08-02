"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";

export default function AdminDashboard() {
  const [adminEmail, setAdminEmail] = useState("admin@krtxff.com");
  const [ffUid, setFfUid] = useState("1234567890");
  const [ffUsername, setFfUsername] = useState("KRT_SUPER_ADMIN");
  const [qrUrl, setQrUrl] = useState("/logo.jpg");

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white pb-10">
      <Header isAdmin={true} />
      <div className="p-4 max-w-2xl mx-auto space-y-6">
        <div className="bg-zinc-900 border border-yellow-500/30 p-5 rounded-2xl space-y-3">
          <h2 className="text-base font-bold text-yellow-400">👑 Admin Profile Settings</h2>
          <div>
            <label className="text-xs text-gray-400 block">Email</label>
            <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 block">FF UID</label>
              <input type="text" value={ffUid} onChange={(e) => setFfUid(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block">FF Username</label>
              <input type="text" value={ffUsername} onChange={(e) => setFfUsername(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-red-600/30 p-5 rounded-2xl space-y-3">
          <h2 className="text-base font-bold text-red-500">💳 Change Deposit QR Code</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24 border border-zinc-700 rounded-xl overflow-hidden bg-black">
              <Image src={qrUrl} alt="Deposit QR" fill className="object-contain" />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && setQrUrl(URL.createObjectURL(e.target.files[0]))}
              className="text-xs text-gray-400 file:bg-red-600 file:text-white file:border-0 file:px-3 file:py-1 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
