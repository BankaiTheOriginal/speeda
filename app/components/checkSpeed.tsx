"use client";

import { useState, useEffect } from "react";
import { testDownloadSpeed } from "../lib/testDownload";
import SpeedDisplay from "./SpeedDisplay";
import { IoIosRefresh } from "react-icons/io";

export default function CheckSpeed() {
  const [speed, setSpeed] = useState<number | null>(null);
  const [isTesting, setIsTesting] = useState(true);

  async function runTest() {
    setIsTesting(true);
    setSpeed(null);
    try {
      const result = await testDownloadSpeed((livespeed) => {
        setSpeed(livespeed);
      });
      setSpeed(result);
    } catch (error) {
      console.error("Speed test failed:", error);
      setSpeed(0);
    } finally {
      setIsTesting(false);
    }
  }
  useEffect(() => {
    runTest();
  }, []); // runs once when the page loads

  return (
    <div>
      {isTesting && speed === null ? (
        <div></div>
      ) : (
        <div className="flex items-center gap-6 mt-8">
          <div className="flex items-center">
            <SpeedDisplay speed={speed} />
          </div>

          <div className="relative flex items-center justify-center border h-12 p-3 rounded-full cursor-pointer hover:bg-gray-200">
            <button
              onClick={runTest}
              className={`${
                isTesting ? "animate-spin pointer-events-none opacity-50" : ""
              }`}
              aria-label="Retest speed"
            >
              <IoIosRefresh className=" w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
