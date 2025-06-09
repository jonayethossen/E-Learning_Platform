import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      {/* <Courses /> */}
    </div>
  );
};

export default App;
