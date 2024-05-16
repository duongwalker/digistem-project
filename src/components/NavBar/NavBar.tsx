import logo from '../../assets/logo.png'
import DropDownItem from '../DropDownItem/DropDownItem'

export function NavBar() {

  return (
    <div className="navbar w-full flex items-center justify-between py-15 px-7% bg-gray-50 ">
    <img src={logo} alt='' className='logo cursor-pointer' style={{ width: '30%', maxWidth: '170px' }} />
    <ul className="flex-1 list-none text-right font-helvetica-black ">
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
            <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>Home</a>
        </li>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans group'>
            <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>Project</a>
            <ul className='dropdown w-full absolute bg-gray-50 z-50 text-left p-5 hidden group-hover:block'>
                <DropDownItem text='Our project' />
                <DropDownItem text='Our team' />
                <DropDownItem text='Eramus+' />
            </ul>
        </li>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans group'>
            <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>Events</a>
            <ul className='dropdown w-full absolute bg-gray-50 z-50 text-left p-5 hidden group-hover:block'>
                <DropDownItem text='Project Meetings' />
                <DropDownItem text='Multiplier Events' />
                <DropDownItem text='Dissemination Events' />
                <DropDownItem text='Learning Teaching & Training Activities' />
            </ul>
        </li>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
            <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>Contact</a>
        </li>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
            <a className='font-bold text-xl block px-5 py-4 text-center hover:underline'>Moodle</a>
        </li>
    </ul>
</div>

  )
}
