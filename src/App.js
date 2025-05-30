import React from "react";
import DataTable from "./DataTable";

const sampleData = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 35 },
  { id: 5, name: "Eve", age: 22 },
  { id: 6, name: "Frank", age: 31 },
  { id: 7, name: "Grace", age: 27 },
  { id: 8, name: "Hank", age: 29 },
  { id: 9, name: "Ivy", age: 26 },
  { id: 10, name: "Jack", age: 32 },
  { id: 11, name: "Karen", age: 34 },
];

function App() {
  return (
    <div>
      <DataTable data={sampleData} />
    </div>
  );
}

export default App;
