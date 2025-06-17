import React from "react";
import { TopCoursesData } from "./../../MockData/TopCoursesData";
import { FaStar } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoAlarmSharp } from "react-icons/io5";

const TopCoures = () => {
  return (
    <section className="bg-white min-h-screen pt-[98px] ">
      <div className="containers py-[80px]">
        {/* header section  */}
        <div className="flex flex-col items-center justify-center text-center  gap-3">
          <h1 className="text-5xl font-semibold font-Montserrat w-[666px] text-[#101010]">
            Top Courses Recommended for You
          </h1>
          <h2 className="text-xl font-Roboto font-normal text-[#333333]">
            Start learning with courses handpicked just for you — based on your
            preferences and future ambitions.
          </h2>
        </div>
        {/* Top Courses Grid  */}
        <div className="grid grid-cols-3 gap-6 pt-[48px]">
          {TopCoursesData.map((topCourse) => (
            <div className="w-[424px] p-4 mx-auto border border-[#D4D4D4] rounded-2xl  ">
              <div
                key={topCourse.id}
                className="w-[393px] flex flex-col gap-3  "
              >
                <img src={topCourse.image} alt={topCourse.title} />
                <div className="flex justify-between items-center  ">
                  <span className="font-Poppins font-normal text-base text-[#525252]">
                    Batch {topCourse.batchNo}{" "}
                  </span>
                  <div className="flex items-center gap-2">
                    <FaStar className="fill-[#FFAA00] size-5" />
                    <span className=" font-Poppins text-base font-normal text-[#525252]">
                      {topCourse.rating} ({topCourse.reviews} Reviews)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <RiTeamFill className="fill-primary size-5 mr-2" />
                    <span className="font-Poppins text-base font-normal text-[#525252]">
                      {topCourse.seatsLeft} Seats Left{" "}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <IoAlarmSharp className="fill-primary mr-2" />
                    <span className="font-Poppins text-base font-normal text-[#525252]">
                      {topCourse.daysLeft} Days Left
                    </span>
                  </div>
                </div>
                <h1 className="font-semibold font-Poppins text-2xl text-[#15202E]">
                  {topCourse.title}
                </h1>
                <div className="flex items-center">
                  <h2 className="font-medium font-Poppins text-lg text-[#101010]">
                    Instructor-
                  </h2>
                  <h2 className="font-normal text-base font-Poppins text-[#101010]">
                    {" "}
                    {topCourse.instructor}
                  </h2>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-4xl text-primary font-Montserrat font-bold ">
                    ${topCourse.price}
                  </h2>
                  <h3 className="text-xl text-[#AAAAAA] font-Poppins font-normal line-through ">
                    ${topCourse.orginalPrice}
                  </h3>
                </div>
                <button className="primary-btn w-[392px]">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCoures;
