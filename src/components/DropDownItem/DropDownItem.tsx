import { Link } from "react-router-dom";

interface DropDownItemProps {
  text: string;
  path: string;
  onItemClick?: () => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ text, path, onItemClick }) => {
  if (path === "erasmus") {
    return (
      <li onClick={onItemClick} className="dropdownItem w-full lg:w-fit min-h-10 font-bold hover:text-[#446AA2] block lg:inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
        <a className="dropdownItemText" target="_blank" rel="noopener noreferrer" href="https://erasmus-plus.ec.europa.eu/">{text}</a>
      </li>
    );
  }
  return (
    <Link to={path} onClick={onItemClick}>
      <li className="dropdownItem w-full lg:w-fit min-h-10 font-bold hover:text-[#446AA2] block lg:inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
        <a className="dropdownItemText">{text}</a>
      </li>
    </Link>
  );
};

export default DropDownItem;
