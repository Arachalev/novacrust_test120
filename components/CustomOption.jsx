"use client";

import React from "react";
import { components } from "react-select";
import Image from "next/image";

const CustomOption = (props) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2 py-4 px-3 hover:bg-[#F5F5F5] rounded-[12px]">
        <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center  ">
          <Image
            src={data.image}
            alt={data.label}
            width={24}
            height={24}
            style={{ borderRadius: "9999px" }}
          />
        </div>

        <span>{data.label}</span>
      </div>
    </components.Option>
  );
};

export default CustomOption;
