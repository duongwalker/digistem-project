import logo from '../../assets/logo.png'
import NavItem from '../NavItem/NavItem'

export function NavBar() {

  return (
    <div className="navbar w-full flex items-center justify-between py-15 px-7% bg-gray-50 ">
      <img src={logo} alt='' className='logo cursor-pointer' style={{ width: '30%', maxWidth: '170px', padding: '5px' }} />
      <ul className="flex-1 list-none text-right font-helvetica-black ">
        <NavItem text='Home' path='/'/>
        <NavItem text='Projects' dropdownItems={['Our project', 'Our team', 'Erasmus+']} path='projects'/>
        <NavItem text='Events' dropdownItems={['Project Meetings', 'Multiplier Events', 'Dissemination Events', 'Learning Teaching & Training Activities']}  path='events'/>
        <NavItem text='Contact' path='contact'/>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans'>
          <a className='font-bold text-xl block px-3 py-2 text-center hover:underline rounded-lg bg-[#446AA2] text-white'>Moodle</a>
        </li>
      </ul>
    </div>

  )
}
