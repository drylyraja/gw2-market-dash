'use client'
import { getMarketData } from "@/lib/get-market-data";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useEffect, useState } from "react";

const MarketData = () => {
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    getMarketData()
      .then((response) => response.json())
      .then((data) => setRowData(data.rows))
  }, [])  

  const [columnDefs]: any = useState([
    { field: 'name' },
    { field: 'id' }
  ]);

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: 500 }}>
        <AgGridReact
          gridId="market_grid"
          rowData={rowData}
          columnDefs={columnDefs}
          />
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {MarketData()}
    </main>
  );
}
