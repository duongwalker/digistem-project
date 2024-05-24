import logo from '../../assets/logo.png'
import NavItem from '../NavItem/NavItem'

export function NavBar() {

  return (
    <div className="navbar w-full flex items-center justify-between py-15 px-1 z-auto bg-gray-50 h-[9vh]">
      <img src={logo} alt='' className='logo cursor-pointer' style={{ width: '10%', maxWidth: '170px', height:'fit-content' }} />
      <ul className="flex-1 list-none text-right font-helvetica-black ">
        <NavItem text='Home' path='/'/>
        <NavItem text='Projects' dropdownItems={['Our project', 'Our team', 'Erasmus+']} path='projects'/>
        <NavItem text='Events' dropdownItems={['Project Meetings', 'Multiplier Events', 'Dissemination Events', 'Learning Teaching & Training Activities']}  path='events'/>
        <NavItem text='Contact' path='contact'/>
        <li className='inline-block m-2 cursor-pointer relative font-helvetica font-sans '>
          <a href='http://vps218.cesvima.upm.es/moodle/'  target='_blank' rel='noopener noreferrer' className='font-bold text-xl block px-3  text-center hover:underline bg-[#446AA2] rounded-full min-w-28 text-white'>Moodle</a>
        </li>
      </ul>
    </div>

  )
}
