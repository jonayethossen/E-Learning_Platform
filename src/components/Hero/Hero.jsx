import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

import ReviewImage_1 from "../../assets/Review_1.png";
import ReviewImage_2 from "../../assets/Review_2.png";
import ReviewImage_3 from "../../assets/Review_3.png";
import HeroImage from "../../assets/hero_Image.png";

import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      <section className="bg-tertiary  ">
        <div className=" xl:max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-[816px] px-6 pb-[57px] ">
          {/* Brand Info  */}
          <div className="text-white text-center lg:text-left flex flex-col justify-center items-center lg:items-start py-12 lg:py-20 ">
            <h1 className="font-Montserrat text-7xl font-bold leading-[100px] tracking-[1.40px] max-w-[648px] ">
              Learn New <span className="bg-primary ">Skills.</span> Build Your{" "}
              <span className="bg-secondary">Future.</span>
            </h1>
            <p className="mt-[24px] font-Roboto lg:text-xl text-base font-normal lg:w-full w-[327px] lg:leading-relaxed leading-normal ">
              Explore thousands of online courses from top instructors
              worldwide.
            </p>
            <div className="py-12 flex ">
              {/* Button & Review  */}
              <button className="primary-btn mr-6">Browse Courses</button>
              <div className="flex gap-6">
                <div className="flex -space-x-3 ">
                  <img src={ReviewImage_1} alt="ReviewImage_1" />
                  <img src={ReviewImage_2} alt="ReviewImage_1" />
                  <img src={ReviewImage_3} alt="ReviewImage_1" />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex ">
                    <IoIosStar className="size-6" />
                    <IoIosStar className="size-6" />
                    <IoIosStar className="size-6" />
                    <IoIosStar className="size-6" />
                    <IoIosStarHalf className="size-6" />
                  </div>
                  <h2>( 10k+ Reviews)</h2>
                </div>
              </div>
            </div>
            {/* search box */}
            <SearchBar />
          </div>
          {/* Brand Image  */}
          <div className="flex  items-center justify-center">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="py-20  ml-6 w-[648px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
