import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRTxFF - Free Fire Esports",
  description: "Play Free Fire Custom Matches and Win Real Coins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0C] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
