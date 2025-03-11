import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                Firebase+MongoDB Auth
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              {currentUser && (
                <Link
                  to="/dashboard"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
              )}
              {currentUser && (
                <Link
                  to="/profile"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Profile
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {currentUser ? (
              <div className="ml-3 relative">
                <div className="flex items-center">
                  {currentUser.photoURL && (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={currentUser.photoURL}
                      alt="User avatar"
                    />
                  )}
                  <span className="mx-2 text-sm text-gray-700">
                    {currentUser.displayName || currentUser.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="ml-2 px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 transition ease-in-out duration-150"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {currentUser && (
            <Link
              to="/dashboard"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          {currentUser && (
            <Link
              to="/profile"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          )}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {currentUser ? (
            <div className="flex items-center px-4">
              {currentUser.photoURL && (
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={currentUser.photoURL}
                    alt="User avatar"
                  />
                </div>
              )}
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-800">
                  {currentUser.displayName || "User"}
                </div>
                <div className="text-sm font-medium leading-none text-gray-500 mt-1">
                  {currentUser.email}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4 px-4 py-2">
              <Link
                to="/login"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
          {currentUser && (
            <div className="mt-3 space-y-1">
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
