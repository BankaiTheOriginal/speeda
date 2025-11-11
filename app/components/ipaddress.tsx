"use client";
import React, { useEffect, useState } from "react";
import getIPAddress from "../lib/getIPAddress";

export default function IPAddress() {
  const [ipaddress, setIPAddress] = useState<string | null>(null);

  useEffect(() => {
    async function getIP() {
      try {
        const ip = await getIPAddress();
        setIPAddress(ip);
      } catch (error) {
        setIPAddress(`Unable to fetch IP ${error}`);
      }
    }
    getIP();
  }, []);

  return (
    <div>
      <div>
        <span>IP Address</span>
        <div className="mt-2 text-lg font-mono text-gray-600">{ipaddress}</div>
      </div>
    </div>
  );
}
