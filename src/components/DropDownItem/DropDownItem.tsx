import { Link } from "react-router-dom";

interface DropDownItemProps {
  text: string;
  path: string;
  onItemClick?: () => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ text, path, onItemClick }) => {
  if (path === "erasmus") {
    return (
      <Link to={path} target="_blank" rel="noopener noreferrer"  onClick={onItemClick}>
        <li className="dropdownItem w-full lg:w-fit min-h-10 font-bold hover:text-[#446AA2] block lg:inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
          <a className="dropdownItemText">{text}</a>
        </li>
      </Link>
    );
  }
  return (
    <Link to={path}  onClick={onItemClick}>
      <li className="dropdownItem w-full lg:w-fit min-h-10 font-bold hover:text-[#446AA2] block lg:inline-block mx-2 mt-3 cursor-pointer relative font-helvetica font-sans mb-2">
        <a className="dropdownItemText">{text}</a>
      </li>
    </Link>
  );
};

export default DropDownItem;
