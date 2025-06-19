import React from "react";
import { StudentsData } from "../../MockData/StudentsData";

const StudentsSaying = () => {
  return (
    <section className="bg-white">
      <div className="containers  py-[80px]">
        {/* header text */}
        <div className="text-center">
          <h1 className="font-Montserrat font-semibold text-5xl text-[#101010]">
            What Our Students Are Saying!
          </h1>
          <p className="font-Roboto font-normal text-base text-[#333333] mt-4">
            Real stories from real students who have transformed their learning
            journey.
          </p>
        </div>
        {/* Card  */}
        <div className="py-12 mx-auto justi grid grid-cols-3 gap-8  ">
          {StudentsData.map((student) => {
            const StarIcon = student.icon;
            return (
              <div
                key={student.id}
                className="w-[424px] h-[416px] bg-white rounded-[20px] relative"
              >
                <div className="w-[100px] h-[197px] bg-[#0B7077] right-0 bottom-0 rounded-b-[20px] absolute "></div>
                <div className=" w-[424px] bg-[#0B7077] right-0 bottom-0 rounded-b-[20px] rounded-t-[60px] absolute ">
                  <div
                    className="flex gap-4 items-center justify-center p-8 
                  "
                  >
                    <img src={student.image} alt={student.name} />
                    <div>
                      <h1 className="text-[32px] text-white font-semibold font-Montserrat mb-2">
                        {student.name}
                      </h1>
                      <p className=" text-xl text-[rgba(255,255,255,0.6)] font-normal font-Roboto">
                        {student.designation}
                      </p>
                    </div>
                  </div>
                </div>
                {/* rating & description  */}
                <div className=" rounded-b-[60px] relative bg-white p-8   ">
                  <div className="flex items-center gap-4 mb-4  ">
                    {/* star icon  */}
                    <div className="flex text-[#FFAA22] gap-1 text-[18px] ">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon className="text-[#D9D9D9]" />
                    </div>
                    <div className="text-lg text-[#000000] font-Montserrat font-semibold">
                      {student.rating}
                    </div>
                  </div>
                  {/* description  */}
                  <div className="text-[#1E1E1E] text-xl font-normal font-Roboto leading-[32px] w-[359px] h-[160px] ">
                    {student.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentsSaying;
