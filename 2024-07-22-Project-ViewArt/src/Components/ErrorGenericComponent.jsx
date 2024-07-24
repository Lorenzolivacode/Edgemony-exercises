import React from "react";
import { useRouteError } from "react-router-dom";
import { labels } from "../data/labels";

export function ErrorGenericComponent({ message }) {
  const error = useRouteError();

  return (
    <div className="text-center mt-16">
      <h1 className="mb-4 text-6xl font-semibold text-cyan-700">404</h1>
      <p className="mb-4 text-lg text-gray-600">{labels.ErrorTxt}</p>
      <p className="mb-4 text-lg text-cyan-700">
        {message || error.statusText || error.message}
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
        {labels.ErrorTryAgain}
        <a href="/" className="text-blue-500">
          {labels.ErrorLukier}
        </a>
      </p>
    </div>
  );
}

export default ErrorGenericComponent;
