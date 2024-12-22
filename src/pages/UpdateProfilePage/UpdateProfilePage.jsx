import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfilePage = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [message, setMessage] = useState({ type: "", text: "" });
    const navigate = useNavigate();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!user) return setMessage({ type: "error", text: "User not authenticated." });

        try {
            await updateProfile(user, { displayName: displayName.trim(), photoURL: photoURL.trim() });
            setMessage({ type: "success", text: "Profile updated successfully!" });
            navigate("/profile");
        } catch {
            setMessage({ type: "error", text: "Failed to update profile. Please try again." });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>SprintSpace | Update Profile</title>
            </Helmet>
            <form
                onSubmit={handleUpdateProfile}
                className="w-full max-w-sm bg-white p-6 shadow-md rounded-lg"
            >
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
                    Update Profile
                </h2>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Display Name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {message.text && (
                    <p
                        className={`text-sm mb-3 ${
                            message.type === "error" ? "text-red-500" : "text-green-500"
                        }`}
                    >
                        {message.text}
                    </p>
                )}
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full py-2 text-center bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfilePage;
