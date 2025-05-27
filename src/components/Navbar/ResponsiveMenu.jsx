import { AnimatePresence } from "framer-motion";
import React from "react";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.dev
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left=0 w-full h-screen z-20 "
        >
          <div className="text-white font-medium text-lg font-Montserrat bg-primary py-10 m-6">
            <ul>
              <li>Home</li>
              <li>All Courses</li>
              <li>Categories</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.dev>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
