// components/DropDown.tsx

import React, { useState } from "react";

interface DropDownProps {
  options: string[];
  heading: string;
  textColor: string;
  className?: string;
  onSelect: (option: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  className,
  heading,
  textColor,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` relative inline-block ${className ? className : "w-fit"}`}
    >
      <div className="relative">
        <button
          className=" bg-dialogBackground text-customGray/50 py-2 border-[3px] border-dialogBackground px-4 rounded inline-flex items-center w-full"
          onClick={toggleDropdown}
        >
          <span className="mr-6 w-fit font-poppinsMedium500 text-[12px]">
            {heading}
          </span>
          <span
            className={`mr-1 ml-auto text-${textColor} text-[12px] font-poppinsSemibold600`}
          >
            {selectedOption || options[0]}
          </span>
          <svg
            className={`fill-current h-4 w-4 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 0h20v20H0z" fill="none" />
            <path d="M10 12l-6-6h12l-6 6z" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute z-10 text-customGray/50 pt-1 w-full border border-dialogBackground rounded shadow-lg bg-dialogBackground">
            {options.map((option, index) => (
              <li
                key={index}
                className="bg-transparent hover:bg-dialogBackground py-2 px-4 block cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
