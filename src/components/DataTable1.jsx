import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function Datatable1() {
  const [rows, setRows] = useState([]);
  const [rows2, setRows2] = useState([]);

  const myStyles = {
    backgroundColor: "skyBlue",
    padding: "2px",
  };


  const getRowId = (row) => row.seQ_NO;

  useEffect(() => {
    axios
      .get("http://f10/api/ParaTypeDemo/GetParaTypeMas")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    useEffect(() => {
    axios
      .get("http://f10/api/ParaTypeDemo/GetParaValueMas")
      .then((response) => {
        setRows2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  

  const columns = [
    { field: "parA_TYPE", headerName: "Parameter", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "nativE_VALUE", headerName: "Native Value", flex: 1 },
    { field: "g_PARA_TYPE", headerName: "Group Name", flex: 1 },
    { field: "sorT_NO", headerName: "Sort No.", flex: 1 },
  ];

    const columns2 = [
    { field: "parA_VALUE", headerName: "Value", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "caption", headerName: "Caption", flex: 1 },
    { field: "shorT_VALUE", headerName: "Short Name", flex: 1 },
    { field: "nativE_VALUE", headerName: "Native Value", flex: 1 },
    { field: "g_PARA_VALUE_1", headerName: "G Para Value 1", flex: 1 },
    { field: "g_PARA_VALUE_2", headerName: "G Para Value 2", flex: 1 },
    { field: "sorT_NO", headerName: "Sort No.", flex: 1 },
  ];


  return (
    <>
    <div>
    <p style={myStyles}>Parameter Type</p>
      <div className="table">
        <DataGrid
          density="compact"
          getRowId={getRowId}
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </div>

    <div>
    <p style={myStyles}>Parameter Value</p>
      <div className="table">
        <DataGrid
          density="compact"
          getRowId={getRowId}
          rows={rows2}
          columns={columns2}
          components={{
            Toolbar: GridToolbar,
          }}         />
      </div>
    </div>
    </>
  );
}

export default Datatable1;






