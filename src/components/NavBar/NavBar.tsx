import logo from "../../assets/logo.png";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div
      className={`navbar w-full flex items-center justify-between px-7%`}
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
      <ul className="flex-1 list-none text-right font-helvetica-black ">
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
              path: ''
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
        <li className="inline-block m-2 cursor-pointer relative font-helvetica font-sans">
          <a
            href="http://vps218.cesvima.upm.es/moodle/"
            target="_blank"
            rel="noopener noreferrer"
            className={'text-xl block px-3 text-center rounded-full min-w-28 bg-[#EF983E] text-white hover:text-white hover:bg-[#9F005D]'}
          >
            MOOC
          </a>
        </li>
      </ul>
    </div>
  );
}