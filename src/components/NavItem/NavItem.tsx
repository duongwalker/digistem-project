import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import { Link } from "react-router-dom";
interface NavItemProps {
  text: string;
  path?: string;
  dropdownItems?: { text: string; path: string }[];

}

const NavItem: React.FC<NavItemProps> = ({
  text,
  path,
  dropdownItems
}) => {
  return (
    <>
      {!dropdownItems && path && (
        <Link to={path}>
          <li
            className={'inline-block m-2 cursor-pointer relative font-montserrat nav-hover'}
          >
            <a className="navItem text-xl block px-5 py-4 text-center ">
              {text}
            </a>
          </li>
        </Link>
      )}
      {dropdownItems && !path && (
        <li
          className={'inline-block m-2 cursor-pointer relative font-montserrat group nav-hover'}
        >
          <a className="navItem text-xl block px-5 py-4 text-center">
            {text}
          </a>
          <ul className="dropdown w-full min-w-32 absolute bg-gray-50 z-50 text-left hidden group-hover:block text-black">
            {dropdownItems.map((item) => (
              <DropDownItem key={item.text} text={item.text} path={item.path} />
            ))}
          </ul>
        </li>
      )}
    </>
  );
};

export default NavItem;
