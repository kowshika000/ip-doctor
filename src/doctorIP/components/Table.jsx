import React from "react";

const CustomTable = ({ columns, rows, onOptionClick, collapseData }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "4px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <table style={tableStyles}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.field}
                style={headerCellStyles}
                className="thColor"
              >
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="customBodyRow">
          {rows?.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{ textAlign: "center", padding: "10px" }}
              >
                No Data Found
              </td>
            </tr>
          ) : (
            rows?.map((row) => (
              <>
                {collapseData &&
                  collapseData?.map((data, index) => (
                    <tr key={index}>
                      <td colSpan={columns.length}>{data}</td>
                    </tr>
                  ))}
                <tr key={row.id} style={bodyRowStyles}>
                  {columns?.map((column) => (
                    <td key={column.field} style={bodyCellStyles}>
                      {column.field === "options" ? (
                        <button
                          style={buttonStyles}
                          onClick={(event) => onOptionClick(event, row)}
                        >
                          ⋮
                        </button>
                      ) : (
                        row[column.field]
                      )}
                    </td>
                  ))}
                </tr>
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// CSS Styles
const tableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerCellStyles = {
  padding: "10px",
  backgroundColor: "rgb(170, 199, 195)",
  // borderBottom: "2px solid #ddd",
  // backgroundColor: "rgb(233, 233, 233)",

};

const bodyRowStyles = {
  borderBottom: "1px solid #ddd",
};

const bodyCellStyles = {
  //   padding: "10px",
  textAlign: "left",
  // backgroundColor: "rgb(233, 233, 233)",
  backgroundColor:"white"
};

const buttonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
};

export default CustomTable;
