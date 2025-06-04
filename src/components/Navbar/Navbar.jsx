import React from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/logo.png";
import NavPhoto from "../../assets/navPhoto.png";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavMenu } from "../../MockData/navData";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav
        className="bg-quaternary border-b-1 border-white z-10"
        aria-label="Main Navigation"
      >
        <div className=" container xl:max-w-[1320px] px-6 py-6 flex justify-between items-center mx-auto ">
          {/* Logo section  */}
          <img src={Logo} alt="Logo" />
          {/* Menu section  */}
          <div className="hidden xl:block">
            <ul className="flex items-center gap-12  ">
              {NavMenu.map((item) => {
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
              <img src={NavPhoto} alt="Navigation Decorative Photo" />
            </ul>
          </div>

          {/* Mobile Humburger Menu section  */}
          <div className="xl:hidden ">
            <IoMdMenu
              className="text-4xl text-white "
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </nav>
      {/* Mobile slide ber section  */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
