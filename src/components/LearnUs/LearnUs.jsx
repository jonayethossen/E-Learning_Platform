import React from "react";
import BgShapeTL from "./shape/BgShapeTL";
import BgShapeTR from "./shape/BgShapeTR";
import BgShapeBL from "./shape/BgShapeBL";
import BgShapeBR from "./shape/BgShapeBR";
import LearnWithUsIMG from "../../assets/learnimg.png";
import { LearnUsData } from "../../MockData/LearnUsData";

const LearnUs = () => {
  return (
    <section>
      {/*Main background  */}
      <div className="bg-[#0B7077] min-h-[935px] overflow-hidden">
        {/* SVG shape  */}
        <div className="relative ">
          <div className="absolute left-0 top-0 ">
            <BgShapeTL />
          </div>
          <div className="absolute right-0 top-0 ">
            <BgShapeTR />
          </div>
          <div className="absolute mt-[720px] left-0">
            <BgShapeBL />
          </div>
          <div className="absolute mt-[720px] right-0  ">
            <BgShapeBR />
          </div>
        </div>
        {/* Learn with Us Section  */}
        <div className="containers py-[100px] relative">
          <div className="grid grid-cols-2 gap-12 items-center justify-between">
            <div className=" relative ">
              <img
                src={LearnWithUsIMG}
                alt="learnimg"
                width={648}
                height={735}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white text-5xl font-Montserrat font-semibold mb-6 ">
                Why Learn with Us?
              </h1>
              {LearnUsData.map((LearnData) => {
                const Icon = LearnData.icon;
                return (
                  <div key={LearnData.id} className="flex gap-8 items-start ">
                    <div className="bg-white text-[26px]  rounded-full p-4 mt-8 ">
                      <Icon />
                    </div>
                    <div className="text-white mt-6 ">
                      <h1 className="font-Roboto font-semibold text-[32px] mb-3 ">
                        {LearnData.title}
                      </h1>
                      <p className="font-Roboto font-normal text-lg w-[544px] tracking-[0.36px]">
                        {LearnData.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnUs;
