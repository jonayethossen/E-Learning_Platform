import React from "react";
import { NavbarMenu } from "./../../MockData/data";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/logo.png";
import NavPhoto from "../../assets/navPhoto.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-quaternary border-b-1 border-white">
        <div className=" container xl:max-w-[1320px] px-6  py-8 flex justify-between items-center mx-auto">
          {/* Logo section  */}
          <img src={Logo} alt="Logo" />
          {/* Menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-12  ">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block px-3 py-1 text-white font-medium text-lg font-Montserrat  hover:text-primary duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <img src={NavPhoto} alt="NavPhoto" />
            </ul>
          </div>

          {/* Mobile Humburger Menu section  */}
          <div className="md:hidden">
            <IoMdMenu className="text-4xl text-white" />
          </div>
        </div>
      </nav>
      {/* Mobile slide ber section  */}
    </>
  );
};

export default Navbar;
