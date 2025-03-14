import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/auth/login", formData);
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 w-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                   
                   <button 
    style={{ backgroundColor: "#4F46E5", color: "white", display: "block", margin: "auto" }}
    className="p-3 rounded-lg transition duration-300 ease-in-out font-semibold w-1/2 text-center disabled:bg-gray-400"
    disabled={!formData.email || !formData.password}
>
    Login
</button>

                </form>
                <p className="text-sm mt-4 text-center text-gray-700">
                    Don't have an account? <a href="/signup" className="text-indigo-500 font-semibold hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
