"use client";
import { useState } from "react";
import Header from "../components/Header";

export default function WithdrawPage() {
  const [walletBalance, setWalletBalance] = useState(150);
  const [withdrawalsToday, setWithdrawalsToday] = useState(0);
  const [amount, setAmount] = useState<number | "">("");
  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const numericAmount = Number(amount);

    if (withdrawalsToday >= 2) {
      setMessage({ type: "error", text: "Daily limit reached! Max 2 withdrawals allowed per day." });
      return;
    }
    if (numericAmount < 50) {
      setMessage({ type: "error", text: "Minimum withdrawal limit is 🪙 50 Coins (₹50)." });
      return;
    }
    if (numericAmount > walletBalance) {
      setMessage({ type: "error", text: "Insufficient wallet balance." });
      return;
    }
    if (!upiId.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid UPI ID (e.g., user@upi)." });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setWalletBalance((prev) => prev - numericAmount);
      setWithdrawalsToday((prev) => prev + 1);
      setLoading(false);
      setMessage({
        type: "success",
        text: `Request submitted! 🪙${numericAmount} will be sent to ${upiId} within 2 to 48 hours.`,
      });
      setAmount("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white pb-10">
      <Header />
      <div className="p-4 max-w-md mx-auto space-y-5">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-950/40 border border-zinc-800 p-5 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
            <h2 className="text-2xl font-black text-yellow-400 mt-0.5">🪙 {walletBalance} Coins</h2>
            <p className="text-[10px] text-gray-500 mt-1">1 Coin = ₹1 INR</p>
          </div>
          <span className="text-[10px] bg-zinc-800 border border-zinc-700 text-gray-300 px-2.5 py-1 rounded-full">
            {2 - withdrawalsToday}/2 Left Today
          </span>
        </div>

        <form onSubmit={handleWithdrawal} className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-gray-200">Withdraw To UPI</h3>

          {message && (
            <div className={`p-3 rounded-xl text-xs font-semibold ${message.type === "success" ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}>
              {message.text}
            </div>
          )}

          <div>
            <label className="text-xs text-gray-400 block mb-1">Amount (Coins)</label>
            <input
              type="number"
              placeholder="Min 50 Coins"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm font-bold text-yellow-400 focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 block mb-1">UPI ID</label>
            <input
              type="text"
              placeholder="username@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:border-red-600"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || withdrawalsToday >= 2}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-extrabold text-xs py-3 rounded-xl transition"
          >
            {loading ? "PROCESSING..." : "REQUEST WITHDRAWAL"}
          </button>

          <p className="text-[10px] text-gray-400 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
            ⚡ Payouts are manually verified and processed within <b>2 to 48 hours</b>.
          </p>
        </form>
      </div>
    </div>
  );
}

