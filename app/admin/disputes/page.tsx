"use client";
import { useState } from "react";
import Header from "../../components/Header";

export default function AdminDisputes() {
  const [disputes, setDisputes] = useState([
    {
      id: "DISP-101",
      matchId: "MATCH-882",
      p1: "Killer_FF",
      p2: "KRT_Boss",
      entryFee: 100,
      status: "OPEN",
    },
  ]);

  const handleAction = (id: string, action: string) => {
    setDisputes(disputes.map(d => d.id === id ? { ...d, status: action } : d));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white p-4 max-w-3xl mx-auto space-y-4">
      <Header isAdmin={true} />
      <h1 className="text-lg font-bold text-red-500 border-b border-zinc-800 pb-2">⚠️ DISPUTE CONTROL PANEL</h1>

      {disputes.map((d) => (
        <div key={d.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="bg-red-950 text-red-400 border border-red-800 px-2 py-0.5 rounded font-bold">{d.id}</span>
            <span className="font-bold text-yellow-400">{d.status}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button onClick={() => handleAction(d.id, "RESOLVED")} className="bg-green-600 py-1.5 rounded-lg font-bold">Winner: {d.p1}</button>
            <button onClick={() => handleAction(d.id, "RESOLVED")} className="bg-green-600 py-1.5 rounded-lg font-bold">Winner: {d.p2}</button>
          </div>

          {d.status === "OPEN" && (
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <button onClick={() => handleAction(d.id, "REMATCH")} className="bg-yellow-600 text-black py-2 rounded-xl font-bold">
                🔄 Rematch
              </button>
              <button onClick={() => handleAction(d.id, "REFUNDED")} className="bg-red-600 text-white py-2 rounded-xl font-bold">
                💸 Refund Both (🪙{d.entryFee})
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
