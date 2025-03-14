import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import ClubHeadDashboard from "./ClubHeadDashboard";
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await API.get("/auth/me", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setUser(data);
            } catch (err) {
                navigate("/login");
            }
        };
        fetchUser();
    }, [navigate]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-bold">Welcome, {user.username}!</h2>
                <p className="text-gray-600">Role: {user.role}</p>
                {user.role === "student" && <StudentDashboard />}
                {user.role === "club_head" && <ClubHeadDashboard />}
                {user.role === "admin" && <AdminDashboard />}
            </div>
        </div>
    );
};

export default Dashboard;
