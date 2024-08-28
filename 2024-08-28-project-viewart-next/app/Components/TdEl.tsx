import React, { ReactNode } from "react";

interface ITdEl {
  children: ReactNode;
}

function TdEl({ children }: ITdEl) {
  return (
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      {children}
    </td>
  );
}

export default TdEl;
