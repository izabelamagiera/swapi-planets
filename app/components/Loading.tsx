"use client";
import React from "react";
import { Planet } from "@phosphor-icons/react";

export default function Loading() {
  return (
    <div>
      <Planet size={32} />
      <div className="mt-2">Loading...</div>
    </div>
  );
}
