interface DropDownItemProps {
    text: string
}

const DropDownItem: React.FC<DropDownItemProps>  = ({text}) => {

  return (
    <li className="dropdownItem inline-block m-2 cursor-pointer relative font-helvetica font-sans mb-5">
        {text}
    </li>
  )
}

export default DropDownItem