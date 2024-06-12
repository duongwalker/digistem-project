import { useState } from "react";
import logo from "../../assets/logo.png";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import closing_btn from "../../assets/closing_btn.svg"

export function NavBar2() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white">
            <div className="flex justify-between items-center px-4 py-2 lg:px-8 lg:py-4 relative">
                <div className="flex items-center w-1/3 max-w-xs lg:w-1/4 lg:max-w-none">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo cursor-pointer w-24 lg:w-32" />
                    </Link>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 focus:outline-none"
                >
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                <div className={`w-full lg:w-auto flex-grow lg:flex-grow-0 lg:flex lg:items-center ${isOpen ? "block" : "hidden"} lg:block`}>
                    <ul className="flex flex-col lg:flex-row items-center lg:ml-4 list-none">
                        <NavItem text="Home" path="/" />
                        <NavItem
                            text="Projects"
                            dropdownItems={[
                                { text: "Our project", path: "projects" },
                                { text: "Our team", path: "ourteam" },
                                { text: "Erasmus+", path: "" },
                            ]}
                        />
                        <NavItem
                            text="Events"
                            dropdownItems={[
                                { text: "Project Meetings", path: "project-meetings" },
                                { text: "Multiplier Events", path: "multiplier-events" },
                                { text: "Dissemination Events", path: "events" },
                                { text: "Learning Teaching & Training Activities", path: "activities" },
                            ]}
                        />
                        <NavItem text="Contact" path="contact" />
                        <li className="inline-block m-2 cursor-pointer relative font-montserrat">
                            <a
                                href="http://vps218.cesvima.upm.es/moodle/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-xl px-3 text-center rounded-full min-w-28 min-h-9 bg-[#EF983E] text-white hover:text-white hover:bg-[#9F005D]"
                            >
                                Courses
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute top-2 right-4 lg:hidden px-3 py-2 rounded text-black-500 hover:text-black-400 focus:outline-none ${isOpen ? "block" : "hidden"}`}
            >
                <img src={closing_btn} className="h-6 w-6" alt="Close" />
            </button>

        </div>
    );
}
