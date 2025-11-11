import React from "react";
import CheckSpeed from "./checkSpeed";
import IPAddress from "./ipaddress";

export default function Main() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-80 justify-center font-sans mt-10 ">
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            SPEEDA
          </span>
          <div className="flex flex-col mt-5">
            <span>Check network speed</span>
            <span className="text-sm text-red-600">Can use more than 50MB</span>
          </div>
        </div>
        <div className="h-[200px] flex items-center justify-center">
          <CheckSpeed />
        </div>
        <div>
          <IPAddress />
        </div>
      </div>
    </div>
  );
}
