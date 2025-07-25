import React from "react";
import ShapeOne from "./shape/shape1";
import ShapeTwo from "./shape/shape";
import { SuccessData } from "./../../MockData/SuccessData";
const SuccessRate = () => {
  return (
    <section>
      {/* background  */}
      <div className="bg-secondary min-h-[495px]  ">
        {/* backgorud shape  */}
        <div className=" relative z-1  ">
          <div className="absolute left-0">
            <ShapeOne />
          </div>
          <div className="absolute right-0">
            <ShapeTwo />
          </div>
        </div>
        {/* header text */}
        <div className="py-[80px] z-2 containers ">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className=" font-Montserrat font-semibold text-5xl">
              Our Success Rate
            </h1>
            <p className=" font-Poppins font-normal  text-base w-[594px] text-center ">
              Your success is the driving force behind our commitment to
              providing exceptional learning experiences every day.
            </p>
          </div>
          {/* Icon  */}
          <div className="grid grid-cols-3">
            {SuccessData.map((success) => {
              const Icon = success.icon;
              return (
                <div key={success.id} className="">
                  <div className="bg-[rgba(255,255,255,0.25)] p-6">
                    <Icon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessRate;
