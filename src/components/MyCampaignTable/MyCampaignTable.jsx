import PropTypes from "prop-types";
import { useTable } from "react-table";

const MyCampaignTable = ({ campaigns, columns }) => {
  const tableInstance = useTable({ columns, data: campaigns });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="shadow">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-500 rounded-lg overflow-scroll"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="px-4 py-3 text-gray-800 dark:text-white uppercase tracking-wider border border-gray-400 dark:border-gray-200 text-center bg-teal-100 dark:bg-gray-700"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="hover:bg-gray-50 text-center"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.id}
                    className="px-4 py-4 border border-gray-400 dark:border-gray-200 text-gray-900 dark:text-white dark:bg-gray-800"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
MyCampaignTable.propTypes = {
  campaigns: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MyCampaignTable;
