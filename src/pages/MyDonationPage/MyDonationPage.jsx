// import { useContext, useEffect, useState, useMemo } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import axios from "axios";
// import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
// import { Helmet } from 'react-helmet';

// const MyDonationPage = () => {
//   const { user } = useContext(AuthContext);
//   const [donations, setDonations] = useState([]);
//   const email = user?.email;

//   useEffect(() => {
//     axios
//       .get(`${apiBaseUrl}/donations`)
//       .then((response) => {
//         const receivedData = response.data.filter(
//           (item) => item.userEmail === email
//         );
//         setDonations(receivedData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, [email]);

//   // Define table columns
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "campaignTitle",
//         header: "Campaign Title",
//       },
//       {
//         accessorKey: "donationAmount",
//         header: "Donation Amount",
//         cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
//       },
//       {
//         accessorKey: "donationDate",
//         header: "Donation Date",
//         cell: ({ getValue }) =>
//           new Date(getValue()).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//           }),
//       },
//       {
//         accessorKey: "userEmail",
//         header: "Email",
//       }
//     ],
//     []
//   );

//   const table = useReactTable({
//     data: donations,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="py-10">
//       <Helmet>
//         <title>SprintSpace | My Donations</title>
//       </Helmet>
//       <div className="container mx-auto px-4">
//         <div className=" mb-10">

//           <SectionTitle title={"My Donations"} subtitle={"A record of all the campaigns you have contributed to."} />
//         </div>


//         {donations.length > 0 ? (
//           <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//             <table className="min-w-full table-auto border-collapse border border-gray-200">
//               <thead className="bg-gray-100">
//                 {table.getHeaderGroups().map((headerGroup) => (
//                   <tr key={headerGroup.id}>
//                     {headerGroup.headers.map((header) => (
//                       <th
//                         key={header.id}
//                         className="border border-gray-200 px-4 py-2 text-left text-gray-700 font-semibold"
//                       >
//                         {header.isPlaceholder
//                           ? null
//                           : header.column.columnDef.header}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody>
//                 {table.getRowModel().rows.map((row) => (
//                   <tr key={row.id} className="hover:bg-gray-50 transition">
//                     {row.getVisibleCells().map((cell) => (
//                       <td
//                         key={cell.id}
//                         className="border border-gray-200 px-4 py-2 text-gray-700"
//                       >
//                         {cell.column.columnDef.cell
//                           ? cell.column.columnDef.cell(cell)
//                           : cell.getValue()}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">
//             You haven&apos;t made any donations yet.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyDonationPage;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import SectionTitle from "../../components/shared/SectionTitle";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
import { Helmet } from "react-helmet";

const MyDonationPage = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/donations`)
      .then((response) => {
        const receivedData = response.data.filter(
          (item) => item.userEmail === email
        );
        setDonations(receivedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [email]);

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>SprintSpace | My Donations</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            title={"My Donations"}
            subtitle={
              "A record of all the campaigns you have contributed to."
            }
          />
        </div>

        {donations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-gray-600 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {donation.campaignTitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Amount:</span> $
                  {donation.donationAmount.toFixed(2)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(donation.donationDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>{" "}
                  {donation.userEmail}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            You haven&apos;t made any donations yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyDonationPage;
