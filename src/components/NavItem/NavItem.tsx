import React, { useState } from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  path?: string;
  dropdownItems?: { text: string; path: string }[];
  isSidebar?: boolean;
  onItemClick?: () => void; // New prop to handle item click
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  path,
  dropdownItems,
  isSidebar = false,
  onItemClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    if (onItemClick) onItemClick();
  };

  return (
    <li
      className={`relative font-montserrat ${
        isSidebar ? "text-center w-full" : "inline-block m-2 cursor-pointer nav-hover"
      }`}
      onMouseEnter={isSidebar ? undefined : () => setIsDropdownOpen(true)}
      onMouseLeave={isSidebar ? undefined : () => setIsDropdownOpen(false)}
    >
      {!dropdownItems && path && (
        <Link to={path} onClick={handleDropdownItemClick}>
          <div className="navItem text-xl block px-5 py-4">{text}</div>
        </Link>
      )}
      {dropdownItems && !path && (
        <>
          <div
            className={`navItem text-xl block px-5 py-4 ${
              isSidebar ? "" : "cursor-pointer"
            }`}
            onClick={
              isSidebar ? () => setIsDropdownOpen(!isDropdownOpen) : undefined
            }
          >
            {text}
          </div>
          {isDropdownOpen && (
            <ul
              className={`${
                isSidebar ? "w-full text-center" : "absolute bg-white shadow-md"
              } z-50 text-left`}
              onMouseEnter={isSidebar ? undefined : () => setIsDropdownOpen(true)}
              onMouseLeave={isSidebar ? undefined : () => setIsDropdownOpen(false)}
            >
              {dropdownItems.map((item) => (
                <DropDownItem key={item.text} text={item.text} path={item.path} onItemClick={handleDropdownItemClick} />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

export default NavItem;
