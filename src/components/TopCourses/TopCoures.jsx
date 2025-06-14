import React from "react";

const TopCoures = () => {
  return (
    <section className="bg-white min-h-screen pt-[98px] ">
      <div className="containers ">
        {/* header section  */}
        <div className="flex flex-col items-center justify-center text-center pt-[80px] gap-3">
          <h1 className="text-5xl font-semibold font-Montserrat w-[666px] text-[#101010]">
            Top Courses Recommended for You
          </h1>
          <h2 className="text-xl font-Roboto font-normal text-[#333333]">
            Start learning with courses handpicked just for you — based on your
            preferences and future ambitions.
          </h2>
        </div>
        {/* Top Courses Grid  */}
        <div className="grid grid-cols-3 gap-6"></div>
      </div>
    </section>
  );
};

export default TopCoures;
