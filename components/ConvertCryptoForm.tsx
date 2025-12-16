"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Flags from "country-flag-icons/react/3x2";

interface ConvertCryptoFormProps {
  pay: boolean;
}

const ConvertCryptoForm = ({ pay = true }: ConvertCryptoFormProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    image: string;
    text: string;
  }>({
    image: "/crypto-icons/color/eth.svg",
    text: "ETH",
  });

  const [selectedCountry, setSelectedCountry] = useState<{
    code: string;
    name: string;
  }>({
    name: "Nigeria",
    code: "NG",
  });

  const options = ["btc", "bnb", "usdt"];

  const countries = [
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "United Kingdom", code: "GB" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
  ];
  const Flag = Flags[selectedCountry.code as keyof typeof Flags];

  return (
    <div className="border-[#E0E0E0] border p-6 rounded-[30px]  sm:w-[512px] h-[112px] ">
      <p className="font-semibold text-[#828282]">
        {pay ? "You pay" : "You receive"}
      </p>
      <div className="flex items-center justify-betweeen">
        <input
          type="number"
          disabled={!pay}
          className="text-[#000E10] w-full outline-none font-semibold text-2xl placeholder:text-2xl placeholder:text-[#000E10]"
          placeholder="1.00"
        />
        <div
          onClick={() => setShowDropDown((state) => !state)}
          className="relative border border-[#E0E0E0] rounded-[20px] bg-[#F7F7F7] w-[110px] h-[36px] py-2 px-3 flex items-center gap-1 cursor-pointer"
        >
          {pay ? (
            <Image src={selectedItem.image} width={20} height={20} alt="icon" />
          ) : (
            <Flag style={{ width: 24 }} />
          )}

          <p className="text-[#013941] text-xs sm:text-sm font-medium">
            {pay
              ? selectedItem.text.toLocaleUpperCase()
              : selectedCountry.code.toLocaleUpperCase()}
          </p>
          <Image src={"/icons/downArr.svg"} width={13.5} height={7.5} alt="icon" />
          <div
            className={`${
              showDropDown ? "block" : "hidden"
            } absolute right-0 bottom-[-255] bg-white
            w-[264px] border border-[#E0E0E0] rounded-[20px] px-3 py-4 z-[20]

            `}
          >
            <div className="mb-2 flex items-center gap-2 border border-[#E0E0E0] rounded-[20px] w-full px-4 py-3">
              <Image
                src={"/icons/search.svg"}
                width={20}
                height={20}
                alt="icon"
              />

              <input
                type="text"
                placeholder="Search"
                className="placeholder:text-sm bg-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              {pay
                ? options.map((item, index) => {
                    return (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();

                          setSelectedItem({
                            image: `/crypto-icons/color/${item}.svg`,
                            text: item,
                          });

                          setShowDropDown(false);
                        }}
                        key={`${item}--${index}`}
                        className="flex items-center gap-2 hover:bg-[#F5F5F5] h-[48px] w-full rounded-[12px] p-3"
                      >
                        <Image
                          src={`/crypto-icons/color/${item}.svg`}
                          width={24}
                          height={24}
                          className="rounded-full border border-[#E0E0E0]"
                          alt="icon"
                        />

                        <p className="text-[#013941] font-medium">
                          {item.toLocaleUpperCase()}
                        </p>
                      </div>
                    );
                  })
                : countries.slice(0, 3).map((country) => {
                    const Flag = Flags[country.code as keyof typeof Flags];

                    return (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();

                          setSelectedCountry({
                            code: country.code,
                            name: country.name,
                          });
                          setShowDropDown(false);
                        }}
                        key={country.code}
                        className="flex items-center gap-2 hover:bg-[#F5F5F5] h-[48px]  w-full rounded-[12px] p-3"
                      >
                        <Flag
                          style={{ width: 27, height: 27, borderRadius: 200 }}
                        />

                        <p className="text-[#013941] font-medium">
                          {country.name.toLocaleUpperCase()}
                        </p>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertCryptoForm;
