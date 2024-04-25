import { getMarketData } from "@/lib/get-market-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify(getMarketData())}</div>
    </main>
  );
}
