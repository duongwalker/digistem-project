interface DropDownItemProps {
    text: string
}

const DropDownItem: React.FC<DropDownItemProps>  = ({text}) => {

  return (
    <li className="dropdownItem block">
        {text}
    </li>
  )
}

export default DropDownItem