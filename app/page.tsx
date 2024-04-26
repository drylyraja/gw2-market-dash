'use client'
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getMarketData } from "@/lib/get-market-data";
import { ColDef } from 'ag-grid-community'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Row Data Interface
interface IRow {
  name: string;
  buys: object;
  sells: object;
}
const mData = getMarketData()

// Create new GridExample component
const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    mData
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "name" },
    { field: "buys" },
    { field: "sells" },
  ]);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={
        "ag-theme-quartz-dark"
      }
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};



export default function Home() {
  return (
    <main className="block mx-auto w-screen h-dvh">
      <GridExample />
    </main>
  );
}
