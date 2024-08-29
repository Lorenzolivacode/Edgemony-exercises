import React from "react";

function LoadingArtworkPage() {
  return (
    <article className="pl-20 pr-20 pt-11 text-cyan-950 w-2/3 m-auto">
      <div className="flex justify-between mb-8">
        <div className="bg-gray-300 w-48 h-48"></div>
        <div className="text-right">
          <div className="bg-gray-300 rounded h-6 mb-2 w-32"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-24"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-16"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-28"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-20"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-24"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-16"></div>
          <div className="bg-gray-300 rounded h-4 mb-1 w-12"></div>
        </div>
      </div>
      <div className="bg-gray-300 rounded h-20 w-full"></div>
    </article>
  );
}

export default LoadingArtworkPage;
