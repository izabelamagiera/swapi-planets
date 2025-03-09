import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col relative p-8 border-[1px] border-sky-900/30 transition-all duration-300 ease-in-out rounded-sm bg-stone-900/10 min-h-96 hover:shadow-sm hover:shadow-sky-900/70  cursor-default">
      {children}
    </div>
  );
}
