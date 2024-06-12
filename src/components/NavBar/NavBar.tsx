import { useState } from "react";
import logo from "../../assets/logo.png";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-0 flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={`navbar w-full flex items-center justify-between px-7% lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div style={{ width: "30%", maxWidth: "170px", padding: "5px" }}>
          <Link to={'/'}>
            <img
              src={logo}
              alt=""
              className="logo cursor-pointer "

            />
          </Link>
        </div>
        <ul className="flex-1 list-none text-right">
          <NavItem text="Home" path="/" />
          <NavItem
            text="Projects"
            dropdownItems={[
              {
                text: "Our project",
                path: 'projects'

              },
              {
                text: "Our team",
                path: 'ourteam'
              },
              {
                text: "Erasmus+",
                path: ''
              }
            ]}

          />
          <NavItem
            text="Events"
            dropdownItems={[
              {
                text: "Project Meetings",
                path: 'project-meetings'
              },
              {
                text: "Multiplier Events",
                path: 'multiplier-events'
              },
              {
                text: "Dissemination Events",
                path: 'events'
              },
              {
                text: "Learning Teaching & Training Activities",
                path: 'activities'
              },
            ]}

          />
          <NavItem text="Contact" path="contact" />
          <li className="inline-block m-2 cursor-pointer relative font-montserrat">
            <a
              href="http://vps218.cesvima.upm.es/moodle/"
              target="_blank"
              rel="noopener noreferrer"
              className={'flex items-center justify-center text-xl px-3 text-center rounded-full min-w-28 min-h-9 bg-[#EF983E] text-white hover:text-white hover:bg-[#9F005D]'}
            >
              Courses
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}