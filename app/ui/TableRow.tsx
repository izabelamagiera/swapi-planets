import React from "react";

export default function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row py-4 border-t border-sky-900/50 justify-between">
      {children}
    </div>
  );
}
