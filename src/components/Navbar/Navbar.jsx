import React from "react";
import { NavbarMenu } from "./../../MockData/data";

const Navbar = () => {
  return (
    <>
      <nav className="bg-quaternary">
        <div className="max-w-[1320px] px-16 py-8 flex justify-between items-center mx-auto">
          {/* Logo section  */}
          <img src="./Logo.png" alt="Logo" />
          {/* Menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-12 text-white font-medium text-lg font-Montserrat ">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block px-3 py-1 hover:text-primary duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <img src="./navPhoto.png" alt="" />
            </ul>
          </div>

          {/* Mobile Humburger Menu section  */}
        </div>
      </nav>
      {/* Mobile slide ber section  */}
    </>
  );
};

export default Navbar;
