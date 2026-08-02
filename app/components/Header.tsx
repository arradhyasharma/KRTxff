"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header({ walletBalance = 0, isAdmin = false }: { walletBalance?: number; isAdmin?: boolean }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-red-900/30 px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="KRTxff Logo"
          width={45}
          height={45}
          className="rounded-lg drop-shadow-[0_0_10px_rgba(220,38,38,0.6)] object-cover"
        />
        <div>
          <h1 className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-gray-200">
            KRT<span className="text-red-600">X</span>FF
          </h1>
          <p className="text-[9px] text-gray-400 tracking-widest uppercase">Esports Tournament</p>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        {!isAdmin ? (
          <>
            <Link
              href="/withdraw"
              className="bg-zinc-900 border border-yellow-500/40 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-yellow-400"
            >
              <span>🪙 {walletBalance} Coins</span>
            </Link>
            <Link
              href="/wallet/deposit"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-lg shadow-red-900/40"
            >
              + Deposit
            </Link>
          </>
        ) : (
          <span className="bg-red-950 border border-red-600 text-red-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            Super Admin
          </span>
        )}
      </div>
    </header>
  );
}

