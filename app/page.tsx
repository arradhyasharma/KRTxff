"use client";
import { useState } from "react";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

export default function MatchesHome() {
  const [activeTab, setActiveTab] = useState("all");

  const matches = [
    { id: "1", mode: "1v1", entryFee: 10, winnerPrize: 17, map: "Bermuda", creator: "Killer_FF", isFree: false },
    { id: "2", mode: "Clash Squad (4v4)", entryFee: 50, winnerPrize: 340, map: "CS-Ranked", creator: "KRT_Boss", isFree: false },
    { id: "3", mode: "FREE TRIAL MATCH", entryFee: 0, winnerPrize: 10, map: "Purgatory", creator: "ADMIN", isFree: true },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white pb-10">
      <Header walletBalance={100} />

      <div className="p-4">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-950 via-zinc-900 to-black p-4 rounded-2xl border border-red-600/40 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="bg-red-600 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded text-white">
                Platform Rules
              </span>
              <h2 className="text-lg font-bold text-yellow-400">Match Lock 8 Mins Prior</h2>
              <p className="text-xs text-gray-300">Minimum Deposit ₹30 required to unlock Free Trial Matches.</p>
            </div>
            <Image src="/logo.jpg" alt="Watermark" width={55} height={55} className="rounded-xl opacity-80" />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none">
        {["all", "1v1", "2v2", "4v4", "Clash Squad", "Free Trial"].map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveTab(mode)}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition ${
              activeTab === mode
                ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/50"
                : "bg-zinc-900 border-zinc-800 text-gray-400 hover:text-white"
            }`}
          >
            {mode.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-4 grid gap-4 max-w-xl mx-auto">
        {matches.map((m) => (
          <div key={m.id} className="bg-zinc-900/90 border border-zinc-800 hover:border-red-600/50 rounded-2xl p-4 transition shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  m.isFree ? "bg-green-950 text-green-400 border-green-600" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                }`}>
                  {m.mode}
                </span>
                <h3 className="text-sm font-bold mt-1 text-gray-100">{m.map}</h3>
                <p className="text-xs text-gray-400">Host: {m.creator}</p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">WINNER PRIZE (85%)</span>
                <span className="text-base font-black text-green-400">🪙 {m.winnerPrize} Coins</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400">Entry: </span>
                <span className="text-xs font-bold text-yellow-400">
                  {m.isFree ? "FREE (Requires 1 Deposit)" : `🪙 ${m.entryFee} Coins`}
                </span>
              </div>

              <Link
                href={`/matches/${m.id}`}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold px-5 py-2 rounded-xl transition shadow-md shadow-red-900/30"
              >
                JOIN MATCH
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
