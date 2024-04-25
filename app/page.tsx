import { getMarketData } from "@/lib/get-market-data";

export default function Home() {
  const marketData = getMarketData()
  console.log(marketData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        
      </div>
    </main>
  );
}
