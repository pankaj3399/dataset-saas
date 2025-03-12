import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return setError("Please enter your email address");
    }

    setError("");
    setMessage("");
    setLoading(true);

    try {
      await forgotPassword(email);
      setMessage("Check your email for password reset instructions");
    } catch (err) {
      setError(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary-soft flex flex-1 flex-col justify-center relative overflow-hidden min-h-screen">
      {/* Background decorative element */}
      <div className="absolute top-10 right-20 opacity-60">
        <svg
          width="704"
          height="854"
          viewBox="0 0 704 854"
          fill="none"
          className="text-primary-accent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="352"
            cy="352"
            r="352"
            fill="url(#paint0_linear_51_188)"
          ></circle>
          <circle
            cx="496.982"
            cy="646.982"
            r="169"
            transform="rotate(-75 496.982 646.982)"
            fill="url(#paint1_linear_51_188)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_51_188"
              x1="623.047"
              y1="106.25"
              x2="352.723"
              y2="542.094"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.113181" stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_51_188"
              x1="627.115"
              y1="528.994"
              x2="497.329"
              y2="738.249"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.113181" stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-lg flex justify-center mx-auto">
          <Link to="/" className="text-lg">
            <span className="font-bold text-primary-strong text-3xl">
              Riverlytics
            </span>
          </Link>
        </div>

        <div className="bg-white max-w-lg shadow-xl p-10 rounded-md flex flex-col my-8 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Reset Your Password</h1>
            <p className="text-default text-sm mt-2">
              Enter your email address, and we'll send you a link to reset your
              password.
            </p>
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {message && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
              role="alert"
            >
              <span className="block sm:inline">{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-default-soft/30 placeholder:text-sm placeholder:text-default rounded-md px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white rounded-md font-semibold px-2 py-3.5 hover:bg-primary-strong disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
