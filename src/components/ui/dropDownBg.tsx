// components/dropDownBg.tsx

import React, { useState } from "react";

interface dropDownBgProps {
  options: string[];
  heading: string;
  textColor: string;
  onSelect: (option: string) => void;
}

const DropDownBg: React.FC<dropDownBgProps> = ({
  options,
  onSelect,
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

  const toggledropDownBg = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block  w-full">
      <div className="relative">
        <button
          className="bg-dialogBackground border border-dialogBackground text-customGray/50 py-2 px-4 rounded justify-between inline-flex items-center w-full"
          onClick={toggledropDownBg}
        >
          <span className="w-fit">{heading}</span>
          <span className={`w-full text-left text-${textColor}`}>
            {selectedOption || options[0]}
          </span>
          <svg
            className={` transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#F7F7F7"
              strokeOpacity="0.8"
              strokeWidth="2.5"
            />
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

export default DropDownBg;
