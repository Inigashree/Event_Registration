const StudentDashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 w-screen text-white">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 text-center transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Dashboard</h3>
                <p className="text-gray-600 mb-6">
                    Explore and register for exciting events happening in your college!
                </p>
                <button 
    style={{ backgroundColor: "#2563EB", color: "white", display: "block", margin: "auto" }}
    className="px-6 py-2 rounded-lg transition duration-300 ease-in-out font-semibold text-center"
>
    View Events
</button>
            </div>
        </div>
    );
};

export default StudentDashboard;
