import React from 'react'
import DropDownItem from '../DropDownItem/DropDownItem'
interface NavItemProps {
    text: string
    dropdownItems?: string[]
}


const NavItem: React.FC<NavItemProps> = ({ text, dropdownItems }) => {
    return (
        <>
            {!dropdownItems && (
                <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
                    <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>{text}</a>
                </li>
            )
            }
            {dropdownItems && (
                <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans group'>
                    <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>{text}</a>
                    <ul className='dropdown w-full absolute bg-gray-50 z-50 text-left p-5 hidden group-hover:block'>
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