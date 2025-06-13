import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopCoures from "./components/TopCourses/TopCoures";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <TopCoures />
    </div>
  );
};

export default App;
