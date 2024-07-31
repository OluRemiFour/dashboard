"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Error() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong. Please try again later.
        </p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleGoHome}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
