'use client'
import { getMarketData } from "@/lib/get-market-data";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";


export default function Home() {
  const marketData = getMarketData()
  console.log(marketData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        test
      </div>
    </main>
  );
}
