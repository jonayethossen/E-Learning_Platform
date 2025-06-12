import React from "react";
import { CoursesData } from "../../MockData/CoursesData";

const Courses = () => {
  return (
    <section>
      <div className="max-w-[1320px] px-6 mx-auto ">
        <div className="grid grid-cols-6">
          {CoursesData.map((courses) => (
            <div key={courses.id}>
              <courses.icon />
              <h1>{courses.title} </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
