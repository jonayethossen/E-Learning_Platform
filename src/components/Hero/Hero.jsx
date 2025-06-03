import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

import ReviewImage_1 from "../../assets/Review_1.png";
import ReviewImage_2 from "../../assets/Review_2.png";
import ReviewImage_3 from "../../assets/Review_3.png";
import HeroImage from "../../assets/hero_Image.png";

const Hero = () => {
  return (
    <>
      <section className="bg-tertiary  ">
        <div className="container xl:max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-[816px] px-6 ">
          {/* Brand Info  */}
          <div className="text-white text-center lg:text-left flex flex-col justify-center items-center lg:items-start py-12 lg:py-20 ">
            <h1 className="font-Montserrat text-7xl font-bold leading-[100px] tracking-[1.40px] max-w-[648px] ">
              Learn New <span className="bg-primary ">Skills.</span> Build Your{" "}
              <span className="bg-secondary">Future.</span>
            </h1>
            <p className="mt-[24px] font-Roboto text-xl lg:text-base font-normal lg:w-full w-[327px] lg:leading-relaxed leading-normal lg:tracking-[0.32px]">
              Explore thousands of online courses from top instructors
              worldwide.
            </p>
            <div className="py-12 flex ">
              {/* Button & Review  */}
              <button className="primary-btn">Browse Courses</button>
              <div className="flex">
                <div className="flex">
                  <img src={ReviewImage_1} alt="ReviewImage_1" />
                  <img src={ReviewImage_2} alt="ReviewImage_1" />
                  <img src={ReviewImage_3} alt="ReviewImage_1" />
                </div>
                <div>
                  <div className="flex">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                  </div>
                  <h2>( 10k+ Reviews)</h2>
                </div>
              </div>
            </div>
            {/* search box */}
            <div></div>
          </div>
          {/* Brand Image  */}
          <img src={HeroImage} alt="HeroImage" className="py-20" />
        </div>
      </section>
    </>
  );
};

export default Hero;
