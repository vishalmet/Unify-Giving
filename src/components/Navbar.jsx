import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from '../assets/navlogo.png'
import ConnButton from '../assets/connect.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  return (
    <div className="bg-transparent border border-gray-900 rounded-full mx-1 md:mx-10 lg:mx-32 flex-wrap bricolage-font">
      <div className="flex items-center p-4 mx-3 text-gray-900 text-xl justify-between">
        <Link to="/">
          <img
            className=" h-12 hover:scale-95 hover:cursor-pointer"
            src={NavLogo}
            alt=""
          />
        </Link>
        <ul className="flex justify-center font-medium text-base space-x-6 ">
          <li className="hover:cursor-pointer border border-gray-400 p-2 rounded-full transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/"
              className={
                " px-2 `menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("home")}
            >
              Home
            </Link>
          </li>
          <li className="hover:cursor-pointer border border-gray-400 p-2 rounded-full transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/track"
              className={
                "px-2 `menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("about")}
            >
              About
            </Link>
          </li>
          <li className="hover:cursor-pointer border border-gray-400 p-2 rounded-full transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/track"
              className={
                "px-2 `menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("web3")}
            >
              Web3
            </Link>
          </li>
          <li className="hover:cursor-pointer border border-gray-400 p-2 rounded-full transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/track"
              className={
                "px-2 `menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("contact")}
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className=" hover:cursor-pointer transition-transform hover:scale-95 ">
            <img src={ConnButton} className=" h-12" alt="" />
        </div>
        {/* <div className="grotesk-font">
          <Connbutton />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;