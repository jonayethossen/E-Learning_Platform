import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import TopCourses from "./components/Top_Courses/TopCourses";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Courses />
      <TopCourses />
    </div>
  );
};

export default App;
