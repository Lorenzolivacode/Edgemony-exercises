import React from "react";

export function TdEl({ children }) {
  return (
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      {children}
    </td>
  );
}

export default TdEl;
