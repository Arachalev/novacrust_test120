"use client";

import React from "react";
import TopNav from "@/components/TopNav";

const page = () => {
  return (
    <div className="max-w-[640px] flex flex-col min-h-screen w-full items-center bg-white">
      <div className="mt-20">
        <TopNav />
      </div>
      <div className="p-16 flex flex-col items-center justify-center">
        <h4
          className={` mb-4 text-[#013941] font-medium text-[32px]`}
          style={{ fontFamily: "clash, sans-serif" }}
        >
          Coming Soon!
        </h4>
        <p className="mb-[30px] text-[#4F4F4F] text-xl text-center">
          Cash to Crypto is almost here. <br />
          Enter your email and we’ll let you know the moment it’s live.
        </p>
        <div className="w-full mb-[80px]">
          <p className="text-[#013941] font-medium mb-4">Email</p>
          <div className=" w-full border border-[#E0E0E0] rounded-[30px] px-6 py-5">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <button className="w-full bg-[#013941] text-[#E6FBF2] text-center font-bold rounded-[30px] h-[60px]">
          Update me
        </button>
      </div>
    </div>
  );
};

export default page;
