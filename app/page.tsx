'use client'
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getMarketData } from "@/lib/get-market-data";
import { ColDef } from 'ag-grid-community'
import { PrismaClient } from '@prisma/client'



export default function Home() {
  const [rowData, setRowData] = useState(getMarketData());
  return (
    <main className="block mx-auto w-screen h-dvh">
      <AgGridReact rowData={rowData} />
    </main>
  );
}
