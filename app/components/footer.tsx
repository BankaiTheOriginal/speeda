import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <footer className="w-full h-16 flex gap-2 items-center justify-center border-t">
        <div>
          Project by{" "}
          <a
            className="text-red-600"
            href="https://github.com/BankaiTheOriginal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justice
          </a>
        </div>
      </footer>
      <div className="flex flex-row gap-4 justify-center mb-4">
        <a
          href="https://www.instagram.com/th3bankai?igsh=MTN2NWE1NjU2ajBjZw%3D%3D&utm_source=qr"
          target="_blank"
          className="text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/BankaiTheOriginal"
          target="_blank"
          className="text-xl"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/justice-julius-attah-7137b2311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          className="text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
