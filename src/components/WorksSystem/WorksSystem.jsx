import React from "react";
import { WorksSystemData } from "../../MockData/WorksSystemData";

const WorksSystem = () => {
  return (
    <section className="bg-white">
      <div className="containers py-[80px] min-h-[392px] ">
        {/* header  */}
        <div className="text-center">
          <h1 className="font-semibold text-5xl text-[#101010] font-Montserrat mb-3 ">
            How It Works
          </h1>
          <p className="text-xl text-[#333333] font-normal font-Roboto mb-12 ">
            Simple Steps to Start Your Learning Journey
          </p>
        </div>
        {/* Works Card  */}
        <div className="grid grid-cols-3 ">
          {WorksSystemData.map((WorksData) => (
            <div
              key={WorksData.id}
              className="max-w-[424px] mr-6 bg-white border-[1px] border-[rgba(253,102,31,0.2)]  rounded-[12px] relative overflow-hidden"
            >
              <img
                src={WorksData.vactor}
                alt={WorksData.title}
                className="absolute "
              />
              <h3 className="text-[42px] font-Montserrat font-semibold text-white relative left-2 ">
                {WorksData.id}
              </h3>
              <div className="text-center pt-6 mt-[-70px]">
                <img
                  src={WorksData.image}
                  alt={WorksData.title}
                  className="mx-auto mb-6"
                />
                <h1 className="text-[32px] text-[#101010] font-semibold font-Montserrat ">
                  {WorksData.title}{" "}
                </h1>
                <p className="text-lg text-[#332233] font-normal font-Roboto pb-6">
                  {WorksData.descriotion}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSystem;
