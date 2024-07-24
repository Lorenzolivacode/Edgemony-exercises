import React from "react";

export function ErrorGenericComponent() {
  return (
    <div className="text-center mt-16">
      <h1 className="mb-4 text-6xl font-semibold text-cyan-700">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-cyan-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        Try again, you'll be{" "}
        <a href="/" className="text-blue-500">
          luckier
        </a>
        .
      </p>
    </div>
  );
}

export default ErrorGenericComponent;
