import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        poster: "",
        registrationLink: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:5004/api/events/create", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert("Event Created Successfully!");
            navigate("/events"); // Redirect after event creation
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Event</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Event Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Time</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Venue</label>
                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Event Poster URL</label>
                    <input
                        type="url"
                        name="poster"
                        value={formData.poster}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Registration Link</label>
                    <input
                        type="url"
                        name="registrationLink"
                        value={formData.registrationLink}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    disabled={loading}
                >
                    {loading ? "Creating..." : "Create Event"}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
