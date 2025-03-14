const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 w-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h2>
                <p className="text-gray-600 mb-6">Manage users, events, and system settings with ease.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-bold">Users</h3>
                        <p className="text-sm">Manage user accounts and permissions.</p>
                        <button className="mt-3 px-4 py-2 bg-white text-blue-500 font-semibold rounded-md">Manage Users</button>
                    </div>

                    <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-bold">Events</h3>
                        <p className="text-sm">View and moderate events.</p>
                        <button className="mt-3 px-4 py-2 bg-white text-purple-500 font-semibold rounded-md">View Events</button>
                    </div>

                    <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-bold">Settings</h3>
                        <p className="text-sm">Adjust system preferences.</p>
                        <button 
    style={{ backgroundColor: "white", color: "#10B981", display: "block", margin: "auto" }}
    className="mt-3 px-4 py-2 font-semibold rounded-md text-center"
>
    System Settings
</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;