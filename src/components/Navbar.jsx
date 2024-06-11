import React from "react";
import logo from "../assets/logo_transparent2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon from react-icons/fa

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-15" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nitin-pratap-singh-319665257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NitinSingh07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        {/* Facebook icon */}
        <a
          href="https://www.facebook.com/" // Replace with the appropriate Facebook URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
