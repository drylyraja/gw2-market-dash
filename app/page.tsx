'use client'
import { MarketData } from "@/lib/market-data-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{MarketData()}</div>
    </main>
  );
}
