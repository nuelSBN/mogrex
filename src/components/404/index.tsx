import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={goHome}
        className="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
