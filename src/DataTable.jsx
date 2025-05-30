import React, { useState } from "react"; // React and state hook

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const [pageSize, setPageSize] = useState(5); // rows per page

  const totalPages = Math.ceil(data.length / pageSize); // total pages

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1); // go to next page
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1); // go to previous page
    }
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value)); // update page size
    setCurrentPage(1); // reset to page 1
  };

  const startIndex = (currentPage - 1) * pageSize; // where page starts
  const paginatedData = data.slice(startIndex, startIndex + pageSize); // get current page data

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Data Table</h2>

      {/* Page size dropdown */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Page Size:{" "}
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>

      {/* Table */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
