import React, { useRef, useState } from "react";
import { createPopper, Placement } from "@popperjs/core";

const TableDropDown: React.FC = () => {
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Refs for button and dropdown
  const btnDropdownRef = useRef<HTMLAnchorElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);

  // Open dropdown function
  const openDropdown = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "left-start" as Placement,
      });
      setIsDropdownOpen(true);
    }
  };

  // Close dropdown function
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Dropdown Toggle */}
      <a
        className="text-blueGray-500 py-1 px-3 cursor-pointer"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          isDropdownOpen ? closeDropdown() : openDropdown();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>

      {/* Dropdown Menu */}
      <div
        ref={popoverDropdownRef}
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`}
      >
        <a
          href="#pablo"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      </div>
    </>
  );
};

export default TableDropDown;
