import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Shoezie</h1>
      <div className="flex items-center space-x-4">
        {user ? (
          <span className="text-gray-700">Hello, {user.firstName}</span>
        ) : (
          <>
            <Link to="/signin" className="text-brown-500 hover:underline">Sign In</Link>
            <Link to="/signup" className="text-brown-500 hover:underline">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;