"use client";

import { useState, useEffect, useRef } from "react";
import { testDownloadSpeed } from "../lib/testDownload";
import SpeedDisplay from "./SpeedDisplay";
import { IoIosRefresh } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CheckSpeed() {
  const [speed, setSpeed] = useState<number | null>(null);
  const [isTesting, setIsTesting] = useState(true);
  const abortController = useRef<AbortController | null>(null);
  async function runTest() {
    setIsTesting(true);
    setSpeed(null);
    abortController.current = new AbortController();
    try {
      const result = await testDownloadSpeed((livespeed) => {
        setSpeed(livespeed);
      }, abortController.current.signal);
      setSpeed(result);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        // user cancelled — do not reset speed
        console.log("Test cancelled by user.");
      } else {
        console.error("Speed test failed:", error);
        setSpeed(0);
      }
      setSpeed(0);
    } finally {
      setIsTesting(false);
    }
  }
  async function cancelTest() {
    if (abortController.current) abortController.current.abort();
    setIsTesting(false);
  }
  useEffect(() => {
    runTest();
  }, []);

  return (
    <div>
      {isTesting && speed === null ? (
        <div className="animate-spin size-10">
          <AiOutlineLoading3Quarters className="w-10 h-10" />
        </div>
      ) : (
        <div className="flex items-center gap-6 mt-8">
          <div className="flex items-center w-80 justify-center">
            <SpeedDisplay speed={speed} />
          </div>

          <div className="relative ml-3 flex items-center justify-center border h-12 p-3 rounded-full cursor-pointer hover:bg-gray-200">
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
          <div className="relative flex items-center border  justify-center h-12 p-3 rounded-full  cursor-pointer hover:bg-gray-200">
            <button
              onClick={cancelTest}
              disabled={!isTesting}
              aria-label="Cancel test"
            >
              <div className="w-6 h-6">X</div>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
