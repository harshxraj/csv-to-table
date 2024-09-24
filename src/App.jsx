import React, { useState, useMemo } from "react";
import CsvFileInput from "./CsvFileInput";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleFileLoad = (csvData) => {
    setData(csvData);
    setPage(1); // Reset to first page when new data is loaded
  };

  const pages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  const renderTableHeader = () => {
    if (data.length === 0) return null;

    const headers = Object.keys(data[0]);
    return headers.map((header, index) => <TableColumn key={index}>{header.toUpperCase()}</TableColumn>);
  };

  const renderTableRows = () => {
    return paginatedData.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {Object.values(row).map((value, cellIndex) => (
          <TableCell>{value}</TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <div className="p-4">
      <CsvFileInput onFileLoad={handleFileLoad} />

      {data.length > 0 && (
        <>
          <Table color="primary" selectionMode="multiple" aria-label="Example static collection table">
            <TableHeader>{renderTableHeader()}</TableHeader>
            <TableBody>{renderTableRows()}</TableBody>
          </Table>
          <div className="flex w-full justify-center mt-4">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
