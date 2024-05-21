interface DropDownItemProps {
  text: string
  link?: string
}

const DropDownItem: React.FC<DropDownItemProps> = ({ text }) => {

  return (
    <li className="dropdownItem w-fit min-h-10 font-bold hover:text-[#446AA2] inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
      <a className="dropdownItemText">{text}</a>
    </li>
  )
}

export default DropDownItem