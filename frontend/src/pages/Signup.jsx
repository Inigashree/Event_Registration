import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "student",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/auth/register", formData);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500 w-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="role"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="student">Student</option>
                        <option value="club_head">Club Head</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button 
                            style={{ backgroundColor: "#10B981", color: "white", display: "block", margin: "auto" }}
                            className="p-3 rounded-lg transition duration-300 ease-in-out font-semibold w-1/2 text-center"
                        >
                            Sign Up
                        </button>
                 
                </form>
                <p className="text-sm mt-4 text-center text-gray-700">
                    Already have an account? <a href="/login" className="text-green-500 font-semibold hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
