import React from "react";
import { StudentsData } from "../../MockData/StudentsData";

const StudentsSaying = () => {
  return (
    <section className="bg-white">
      <div className="containers min-h-[806px] py-[80px]">
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
        <div className="py-12 mx-auto justi grid grid-cols-3  ">
          {StudentsData.map((student) => {
            const StarIcon = student.icon;
            return (
              <div
                key={student.id}
                className="w-[424px] h-[429px] bg-white rounded-[20px] relative"
              >
                <div className="w-[100px] h-[197px] bg-[#0B7077] right-0 bottom-0 rounded-b-[20px] absolute "></div>
                <div className="w-[424px] h-[154px] bg-[#0B7077] right-0 bottom-0 rounded-b-[20px] rounded-t-[60px] absolute ">
                  <div>
                    <img src={student.image} alt={student.name} />
                  </div>
                </div>
                <div className="w-[424px] h-[276px] rounded-b-[60px] relative bg-white ">
                  <div>
                    <StarIcon />
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
