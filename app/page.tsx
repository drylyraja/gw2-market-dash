'use client'
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getMarketData } from "@/lib/get-market-data";
import { ColDef } from 'ag-grid-community'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const MarketGrid = () => {
  const [rowData, setRowData] = useEffect(
    getMarketData().toArray()
  )

  const [colDefs, setColDefs] = useState([
    { field: 'name' },
    { field: 'whitelisted' }
  ])

  return (
    <div
      className='ag-theme-quartz'
      style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs} />
    </div>
  )
}

export default function Home() {
  return (
    <main className="block mx-auto w-screen h-dvh">
      <MarketGrid />
    </main>
  );
}
