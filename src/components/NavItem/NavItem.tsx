import React from 'react'
import DropDownItem from '../DropDownItem/DropDownItem'
import { Link } from 'react-router-dom'
interface NavItemProps {
    text: string
    path: string
    dropdownItems?: string[]
}


const NavItem: React.FC<NavItemProps> = ({ text, path, dropdownItems }) => {
    return (
        <>
            {!dropdownItems && (
                <li className=' inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
                    <a className='navItem font-bold text-xl block px-5 py-4 text-center'>
                        <Link to={path}>{text}</Link>
                    </a>
                </li>
            )
            }
            {dropdownItems && (
                <li className=' inline-block m-2 cursor-pointer relative font-helvetica font-sans group'>
                    <a className='navItem font-bold text-xl block px-5 py-4 text-center'>
                        <Link to={path}>{text}</Link>
                    </a>
                    <ul className='dropdown w-full min-w-32 absolute bg-gray-50 z-50 text-left hidden group-hover:block'>
                        {dropdownItems.map((item) => (
                            <DropDownItem text={item} />
                        ))}
                    </ul>
                </li>
            )}
        </>
    )
}

export default NavItem