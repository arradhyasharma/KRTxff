"use client";

export default function MatchLobby({ params }: { params: { id: string } }) {
  const match = {
    id: params.id,
    status: "UPCOMING", // 'UPCOMING', 'REMATCH', 'LIVE'
    roomId: "7829102",
    roomPass: "1234",
    prizePool: 170,
  };

  const isVideoRequired = match.prizePool > 100;

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white p-4 max-w-md mx-auto space-y-4">
      {match.status === "REMATCH" && (
        <div className="bg-yellow-950 border border-yellow-600 text-yellow-300 p-3 rounded-xl text-xs">
          ⚠️ <b>REMATCH ORDERED:</b> Previous match glitched. Join using new Room ID below.
        </div>
      )}

      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl space-y-4 text-center">
        <h2 className="text-xs font-bold text-gray-400">CUSTOM ROOM CREDENTIALS</h2>
        
        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">ROOM ID:</span>
            <span className="font-mono font-bold text-yellow-400">{match.roomId}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">PASSWORD:</span>
            <span className="font-mono font-bold text-yellow-400">{match.roomPass}</span>
          </div>
        </div>

        <div className="bg-zinc-950 p-3 rounded-xl text-left space-y-1">
          <p className="text-xs font-bold text-red-400">⚠️ Dispute Proof Rules:</p>
          <p className="text-[11px] text-gray-300">
            {isVideoRequired
              ? "For matches >100 Coins: Full Screen Recording video link is MANDATORY for disputes."
              : "For matches ≤100 Coins: Clear Result Screenshot is acceptable."}
          </p>
        </div>
      </div>
    </div>
  );
}

