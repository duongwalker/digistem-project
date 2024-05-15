import logo from '../../assets/logo.png'
import './NavBar.css'
import DropDownItem from '../DropDownItem/DropDownItem'


export function NavBar() {

  return (
    <div className="navbar w-full flex items-center justify-between py-15 px-7% bg-gray-50">
      <img src={logo} alt='' className='logo cursor-pointer' style={{ width: '30%', maxWidth: '170px' }}></img>
      <ul className="flex-1 list-none text-right">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Project</a>
          <ul className='dropdown w-full absolute bg-gray-50 z-50 hidden'>
            <DropDownItem text='Our project' />
            <DropDownItem text='Our team' />
            <DropDownItem text='Eramus+' />
          </ul>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li className=''>
          <a>Moodle</a>
        </li>
      </ul>
    </div>
  )
}
