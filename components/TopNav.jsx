"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const TopNavData = ["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"];

const TopNav = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(
    pathname == "/" ? "Crypto to cash" : "Cash to crypto"
  );
  const router = useRouter();

  return (
    <div className="flex items-center bg-[#F2F2F2] rounded-[30px] w-fit ">
      {TopNavData.map((item, index) => {
        return (
          <button
            key={`${item}--${index}`}
            onClick={() => {
              setSelected(item);

              if (item === "Cash to crypto") {
                router.push("/cashToCrypto");
              } else {
                router.push("/");
              }
            }}
            className={`
                ${
                  selected === item
                    ? "bg-[#013941] text-[#F8FEFB]"
                    : "bg-none text-[#828282]"
                }  h-8.5 rounded-[30px] text-sm text-center font-medium px-4 whitespace-nowrap cursor-pointer`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default TopNav;
