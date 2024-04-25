import { useEffect, useState } from "react";
import { getMarketData } from "@/lib/get-market-data";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export const MarketData = () => {
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
            rowData={rowData}
            columnDefs={columnDefs}
            />
      </div>
    )
  }