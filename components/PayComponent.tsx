/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Select, { components } from "react-select";
import Image from "next/image";
import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import { StylesConfig } from "react-select";


const options = [
  {
    value: "apple",
    label: "Apple",
    image: "/icons/rainbow.svg",
  },
  {
    value: "banana",
    label: "Banana",
    image: "/icons/wallet.svg",
  },
];

interface PayComponentProps {
  pay: boolean;
}

const PayComponent = ({ pay }: PayComponentProps) => {
  const customStyles:StylesConfig = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #E0E0E0",
      borderRadius: "30px",
      boxShadow: "none",
      height: "60px",
      paddingLeft: "24px",
      "&:hover": {
        borderColor: "#E0E0E0",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#013941",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "transparent" : base.backgroundColor,
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      border: "1px solid #E0E0E0",
      padding: "1px 1px",
      borderRadius: "20px",
      marginTop: "-10px",
      boxShadow: "none",
      overflow: "hidden",
      width: "90%",
      left: "50%",
      transform: "translateX(-50%)",
    }),
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="font-semibold text-[#013941]">
        {pay ? "Pay from" : "Pay to"}
      </p>
      <Select
        placeholder="Select an option"
        options={options}
        styles={customStyles}
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
        }}
      />
    </div>
  );
};

export default PayComponent;
