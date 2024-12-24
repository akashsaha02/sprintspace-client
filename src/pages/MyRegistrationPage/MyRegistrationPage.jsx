import { useContext, useEffect, useMemo, useCallback, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import SectionTitle from "../../components/shared/SectionTitle";
import { useTable } from "react-table";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import "daisyui/dist/full.css"; // Ensure Daisy UI styles are imported
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const MyRegistrationPage = () => {
  const { user } = useContext(AuthContext);
  const [registrations, setRegistrations] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = user?.email;

  // Fetch registrations
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/registrations`)
      .then((response) => {
        const receivedData = response.data.filter(
          (item) => item.userEmail === email
        );
        setRegistrations(receivedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [email]);

  // Open modal with selected registration
  const handleUpdate = (registration) => {
    setSelectedRegistration(registration);
    console.log(registration);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRegistration(null);
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Registration updated: ", selectedRegistration);
      await axios.put(
        `${apiBaseUrl}/registrations/${selectedRegistration._id}`,
        selectedRegistration
      );
      setRegistrations((prev) =>
        prev.map((reg) =>
          reg._id === selectedRegistration._id ? selectedRegistration : reg
        )
      );
      Swal.fire("Updated!", "Registration details updated successfully.", "success");
      handleCloseModal();
    } catch (error) {
      console.error("Error updating registration: ", error);
      Swal.fire("Error!", "Failed to update registration details.", "error");
    }
  };

  const handleDelete = useCallback((id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiBaseUrl}/registrations/${id}`)
          .then(() => {
            setRegistrations((prev) => prev.filter((reg) => reg._id !== id));
            Swal.fire("Deleted!", "Your registration has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting registration: ", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the registration.",
              "error"
            );
          });
      }
    });
  }, []);

  const data = useMemo(() => registrations, [registrations]);

  const columns = useMemo(
    () => [
      { Header: "Event Title", accessor: "eventTitle" },
      { Header: "Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Email", accessor: "userEmail" },
      { Header: "Contact Number", accessor: "contactNumber" },
      {
        Header: "Registration Date",
        accessor: "registrationDate",
        Cell: ({ value }) =>
          new Date(value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
      },
      { Header: "Additional Info", accessor: "additionalInfo" },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleUpdate(row.original)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(row.original._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>SprintSpace | My Registrations</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            title={"My Registrations"}
            subtitle={"A record of all the events you have registered for."}
          />
        </div>

        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <table
              {...getTableProps()}
              className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700"
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200 dark:bg-gray-800">
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-4 py-2 text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
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
                    <tr {...row.getRowProps()} className="border-t border-gray-300 dark:border-gray-700">
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 py-2 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
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
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            You haven&apos;t made any registrations yet.
          </p>
        )}

        {/* Update Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-bold mb-4">Update Registration</h2>
              <form onSubmit={handleFormSubmit}>
                {/* Event Title */}
                <label className="block mb-3">
                  <span className="font-semibold">Event Title</span>
                  <input
                    type="text"
                    name="eventTitle"
                    value={selectedRegistration.eventTitle}
                    onChange={(e) =>
                      setSelectedRegistration((prev) => ({
                        ...prev,
                        eventTitle: e.target.value,
                      }))
                    }
                    className="input input-bordered w-full mt-1"
                    disabled
                  />
                </label>

                {/* First Name */}
                <label className="block mb-3">
                  <span className="font-semibold">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={selectedRegistration.firstName}
                    onChange={(e) =>
                      setSelectedRegistration((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="input input-bordered w-full mt-1"
                  />
                </label>

                {/* Last Name */}
                <label className="block mb-3">
                  <span className="font-semibold">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={selectedRegistration.lastName}
                    onChange={(e) =>
                      setSelectedRegistration((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="input input-bordered w-full mt-1"
                  />
                </label>

                {/* Contact Number */}
                <label className="block mb-3">
                  <span className="font-semibold">Contact Number</span>
                  <input
                    type="text"
                    name="contactNumber"
                    value={selectedRegistration.contactNumber}
                    onChange={(e) =>
                      setSelectedRegistration((prev) => ({
                        ...prev,
                        contactNumber: e.target.value,
                      }))
                    }
                    className="input input-bordered w-full mt-1"
                  />
                </label>

                {/* Additional Info */}
                <label className="block mb-3">
                  <span className="font-semibold">Additional Info</span>
                  <textarea
                    name="additionalInfo"
                    value={selectedRegistration.additionalInfo}
                    onChange={(e) =>
                      setSelectedRegistration((prev) => ({
                        ...prev,
                        additionalInfo: e.target.value,
                      }))
                    }
                    className="textarea textarea-bordered w-full mt-1"
                  />
                </label>

                {/* Modal Actions */}
                <div className="modal-action">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default MyRegistrationPage;