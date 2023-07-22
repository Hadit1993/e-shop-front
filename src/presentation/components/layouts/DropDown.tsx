import { FC } from "react";
import { CategoryData } from "../../../static/data";
import useDropDown from "../../../lib/hooks/layoutHooks/useDropDown";
import styles from "../../styles/styles";

interface DropDownProps {
  categories: CategoryData[];
  toggleDropDown: () => void;
}

const DropDown: FC<DropDownProps> = ({ categories, toggleDropDown }) => {
  const { handleSubmit } = useDropDown(toggleDropDown);

  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm">
      {categories.map((cat, ind) => (
        <div
          key={ind}
          className={`${styles.noramlFlex}`}
          onClick={() => handleSubmit(cat)}
        >
          <img
            src={cat.imageUrl}
            alt="category image"
            className="w-6 h-6 object-contain ml-2 select-none"
          />
          <h3 className="m-3 cursor-pointer select-none">{cat.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
