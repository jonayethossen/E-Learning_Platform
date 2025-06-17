import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopCoures from "./components/TopCourses/TopCoures";
import LearnUs from "./components/LearnUs/LearnUs";
import WorksSystem from "./components/WorksSystem/WorksSystem";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <TopCoures />
      <LearnUs />
      <WorksSystem />
    </div>
  );
};

export default App;
