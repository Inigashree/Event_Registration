const ClubHeadDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Club Head Dashboard</h2>
                <p className="text-gray-600 mb-6">Manage club events and view registered students.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-bold">Create Event</h3>
                        <p className="text-sm">Organize new events for your club.</p>
                        <a href="/create_event" className="mt-3 inline-block px-4 py-2 bg-white text-green-500 font-semibold rounded-md">Create Event</a>
                    </div>

                    <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-bold">My Events</h3>
                        <p className="text-sm">View and manage your scheduled events.</p>
                        <button 
    style={{ backgroundColor: "white", color: "#EAB308", display: "block", margin: "auto" }}
    className="mt-3 px-4 py-2 font-semibold rounded-md text-center"
>
    View My Events
</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubHeadDashboard;
