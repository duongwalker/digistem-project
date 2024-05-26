import { Link } from "react-router-dom";

interface DropDownItemProps {
  text: string;
  path: string ;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ text, path }) => {
  return (
    <Link to={path}>
      <li className="dropdownItem w-fit min-h-10 font-bold hover:text-[#446AA2] inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
        <a className="dropdownItemText">{text}</a>
      </li>
    </Link>
  );
};

export default DropDownItem;
