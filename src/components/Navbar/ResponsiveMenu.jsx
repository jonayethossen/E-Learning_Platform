import React from "react";
import { NavbarMenu } from "./../../MockData/data";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="responsive-menu"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="absolute top-14 right-0 w-full text-center  py-8 h-screen  "
        >
          <div className="text-white font-medium text-lg font-Montserrat bg-tertiary  rounded-b-2xl xl:hidden  ">
            <ul className="flex flex-col space-y-3 py-6 ">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="hover:text-primary cursor-pointer transition-all duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
