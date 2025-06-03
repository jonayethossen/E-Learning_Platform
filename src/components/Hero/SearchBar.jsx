import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[628px] p-[11.78px] bg-[rgba(255,255,255,0.20)] rounded-[8px]  ">
      <div className="flex flex-col items-start justify-center  max-w-[604px] p-[11.78px] bg-white rounded-[8px] border-[#FD661F] border-[1px] ">
        <div className="flex">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="bg-white border-solid border-[1px] border-[#5E5E5E] text-[#B1B1B1] text-base font-light font-Roboto leading-[25.6px] p-[11.78px] rounded-[8px] w-[438px] "
          />
          <button className="search-btn rounded-[8px] ml-3">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
