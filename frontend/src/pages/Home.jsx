import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white w-screen">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Welcome to Event Portal</h1>
      <p className="text-lg mb-8 text-center max-w-lg">Join us to explore and manage amazing events effortlessly.</p>
      
      <div className="flex gap-6">
        <Link to="/login" className="px-8 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Login
        </Link>
        <Link to="/signup" className="px-8 py-3 bg-white text-green-500 font-bold rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition duration-300">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;