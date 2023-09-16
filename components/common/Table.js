"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";

const Table = ({ table }) => {
  console.log(table, "this is table");
  const arr = new Array(9).fill("x");

  const [loading, setLoading] = useState(true);

  const [columnA, setColumnA] = useState([]);
  const [columnB, setColumnB] = useState([]);
  const [columnC, setColumnC] = useState([]);
  const [columnD, setColumnD] = useState([]);
  const [columnE, setColumnE] = useState([]);
  const [columnF, setColumnF] = useState([]);
  const [columnG, setColumnG] = useState([]);

  useEffect(() => {
    setColumnA([]);
    setColumnB([]);
    setColumnC([]);
    setColumnD([]);
    setColumnE([]);
    setColumnF([]);
    setColumnG([]);
    for (let i = 0; i < table.length; i++) {
      const rowA = [];
      const rowB = [];
      const rowC = [];
      const rowD = [];
      const rowE = [];
      const rowF = [];
      const rowG = [];

      for (let j = 0; j < table[i].length; j++) {
        const item = table[i][j];
        switch (item.column) {
          case "A":
            rowA.push(item);
            break;
          case "B":
            rowB.push(item);
            break;
          case "C":
            rowC.push(item);
            break;
          case "D":
            rowD.push(item);
            break;
          case "E":
            rowE.push(item);
            break;
          case "F":
            rowF.push(item);
            break;
          case "G":
            rowG.push(item);
            break;
          default:
            // Handle other cases if needed
            break;
        }
      }

      setColumnA((prevColumnA) => [...prevColumnA, rowA]);
      setColumnB((prevColumnB) => [...prevColumnB, rowB]);
      setColumnC((prevColumnC) => [...prevColumnC, rowC]);
      setColumnD((prevColumnD) => [...prevColumnD, rowD]);
      setColumnE((prevColumnE) => [...prevColumnE, rowE]);
      setColumnF((prevColumnF) => [...prevColumnF, rowF]);
      setColumnG((prevColumnG) => [...prevColumnG, rowG]);

      setLoading(false);
    }
  }, [table]);

  console.log(columnG, "this is column g");
  function getInitials(name) {
    // Split the name into words based on spaces
    const words = name.split(" ");

    // Initialize an empty string to store the initials
    let initials = "";

    // Loop through each word and add the first character to the initials string
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }

    // Convert the initials to uppercase
    initials = initials.toUpperCase();

    return initials;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow-auto max-h-[60vh]">
      <table className="table-fixed ">
        <thead>
          <tr className="text-left">
            <th className="w-10 p-2 sticky left-0 bg-indigo-900 text-white">
              Row
            </th>
            <th className="w-[500px] p-2 bg-gray-600">G</th>
            <th className=" p-2 bg-gray-600">F</th>
            <th className=" p-2 bg-gray-600">E</th>
            <th className=" p-2 bg-gray-600">D</th>
            <th className=" p-2 bg-gray-600">C</th>
            <th className=" p-2 bg-gray-600">B</th>
            <th className=" p-2 bg-gray-600">A</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => {
            return (
              <tr key={index} className="text-left">
                <td className="w-10 p-2 sticky left-0 bg-indigo-800">
                  {index + 1}
                </td>
                <td className="w-[500px] flex gap-4 p-2">
                  {columnG[index].map((cell) => (
                    <div className="h-[150px] flex flex-col text-center justify-center items-center w-[150px] border rounded-lg">
                      <Avatar className="flex items-center justify-center h-[2.5rem] w-[2.5rem] border border-gray-700">
                        {getInitials(cell.name)}
                      </Avatar>
                      <span>{cell.name}</span>
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// const getCellIte = ({ tableList }) => {
//   return (
//     <td className="w-[500px] flex gap-4 p-2">
//       {tableList[index].map((cell) => (
//         <div className="h-[150px] flex flex-col text-center justify-center items-center w-[150px] border rounded-lg">
//           <Avatar className="flex items-center justify-center h-[2.5rem] w-[2.5rem] border border-gray-700">
//             {getInitials(cell.name)}
//           </Avatar>
//           <span>{cell.name}</span>
//         </div>
//       ))}
//     </td>
//   );
// };
