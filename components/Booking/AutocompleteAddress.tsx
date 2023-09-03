import React from "react";

const AutocompleteAddress = () => {
  return (
    <div className="h-[72vh]">
      <div className="relative">
        <label className="text-gray-400 text-[13px]">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-blue-300 text-[14px]"
        />
      </div>
      <div className="relative">
        <label className="text-gray-400 text-[13px]">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-blue-300 text-[14px]"
        />
      </div>
    </div>
  );
};

export default AutocompleteAddress;
