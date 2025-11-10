import React from "react";
import CheckSpeed from "./checkSpeed";

export default function Main() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-80 justify-center font-sans mt-10 ">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-mono mb-2">SPEEDA</span>
          <span>Check your network speed</span>
          <span className="text-sm text-red-600">Can use more than 50MB</span>
        </div>
        <div className="h-[200px] flex items-center justify-center">
          <CheckSpeed />
        </div>
      </div>
    </div>
  );
}
