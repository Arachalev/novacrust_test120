"use client";

import React from "react";
import { components } from "react-select";
import Image from "next/image";

const CustomSingleValue = (props) => {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "9999px",
            border: "1px solid #CCF6E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
    </components.SingleValue>
  );
};


export default CustomSingleValue