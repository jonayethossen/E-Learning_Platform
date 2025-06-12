import React from "react";
import { CoursesData } from "../../MockData/CoursesData";

const Courses = () => {
  return (
    <section>
      <div className="max-w-[1320px] px-6 mx-auto py-20 ">
        <div className="grid grid-cols-6 gap-6 absolute top-[856px] ">
          {CoursesData.map((courses) => (
            <div
              key={courses.id}
              className="flex flex-col  items-center justify-center bg-white border-1 border-red-500 p-6 px-4 py-6 gap-4 hover:scale-120  duration-300 w-[200px] group"
            >
              <courses.icon className="text-[#CFCFCF] group-hover:text-primary transition-colors duration-300 " />
              <h1 className="text-xl font-Montserrat font-semibold text-[#CFCFCF] hover:text-[#101010] group-hover:text-[#101010]  ">
                {courses.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
