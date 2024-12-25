import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const RegistrationModal = ({ event, user, closeModal }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        additionalInfo: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const registrationData = {
                eventId: event._id,
                eventTitle: event.title,
                eventStartDate: event.eventStartDate,
                userEmail: user.email,
                ...formData,
                registrationDate: new Date().toISOString(),
            };

            const response = await axios.post(`${apiBaseUrl}/registrations`,
                registrationData,
                { withCredentials: true }
            );

            if (response.status === 200) {
                closeModal();
                Swal.fire("Success", "You have successfully registered for the event!", "success");
            } else {
                throw new Error("Failed to register.");
            }
        } catch (error) {
            Swal.fire("Error", "An error occurred while registering.", error);
            console.error("Error registering for event:", error);
        }
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Register for {event.title}</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.contactNumber}
                            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Additional Info</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            value={formData.additionalInfo}
                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        />
                    </div>
                    <div className="modal-action">
                        <button type="button" onClick={closeModal} className="btn">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationModal;
