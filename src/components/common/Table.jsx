import React from "react";
import Image from "next/image";

const Table = ({ headers, data, rowKeys, customRenderers }) => {
  return (
    <div className="w-full">
      <div className="min-w-[1000px]">
        <table className="w-full table-auto bg-black border-collapse text-sm">
          <thead className="text-black">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-4 px-4 text-center bg-[#E07E27] ">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-[#D8D8D8]">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-[#222222]">
                {/* {rowKeys.map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-2 px-4 border-r text-center border-[#222222]"
                  >
                    {customRenderers?.[key]
                      ? customRenderers[key](row[key], row)
                      : row[key]}
                  </td>
                ))} */}
                {headers.map((header, colIndex) => {
                  const updatedHeader = header;
                  console.log(updatedHeader, "heaed");

                  return (
                    <td
                      key={colIndex}
                      className="py-2 px-4 border-r text-center border-[#222222]"
                    >
                      {customRenderers?.[header]
                        ? customRenderers[header](row[header], row)
                        : row[header]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
