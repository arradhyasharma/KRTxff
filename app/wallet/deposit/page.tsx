"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";

export default function DepositPage() {
  const [amount, setAmount] = useState<number>(30);
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount < 30) {
      setMsg({ type: "error", text: "Minimum deposit is ₹30 (30 Coins)." });
      return;
    }
    if (utr.length !== 12) {
      setMsg({ type: "error", text: "Please enter a valid 12-digit UPI UTR/Reference Number." });
      return;
    }
    setMsg({ type: "success", text: "Deposit request submitted! Admin will verify your UTR." });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white pb-10">
      <Header />
      <div className="p-4 max-w-md mx-auto space-y-5">
        <h2 className="text-lg font-black text-yellow-400">🪙 Deposit Coins (Min ₹30)</h2>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex flex-col items-center">
          <Image src="/logo.jpg" alt="Payment QR" width={160} height={160} className="rounded-xl border border-yellow-500/30" />
          <p className="text-xs text-gray-400 mt-2">Scan & Pay using any UPI App</p>
          <span className="text-xs font-bold text-yellow-400 mt-1">UPI ID: krtxff@upi</span>
        </div>

        {msg && (
          <div className={`p-3 rounded-xl text-xs font-bold ${msg.type === "success" ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}>
            {msg.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl space-y-3">
          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">Amount Paid (₹)</label>
            <input
              type="number"
              min={30}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-yellow-400 font-bold focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">12-Digit UPI UTR / Ref Number</label>
            <input
              type="text"
              maxLength={12}
              placeholder="e.g. 420192837412"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              className="text-xs text-gray-400 file:bg-red-600 file:text-white file:border-0 file:px-3 file:py-1 rounded-lg"
              required
            />
          </div>

          <div className="bg-red-950/60 border border-red-600/40 p-3 rounded-xl text-[11px] text-gray-300">
            ⚠️ <b>Anti-Fraud T&C:</b> Fake claims or reusing UTRs will result in instant rejection and forfeit of sent funds without refund.
          </div>

          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition">
            SUBMIT DEPOSIT
          </button>
        </form>
      </div>
    </div>
  );
}
