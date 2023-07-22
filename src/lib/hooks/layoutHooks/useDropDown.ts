import { useNavigate } from "react-router-dom";
import { CategoryData } from "../../../static/data";

export default function useDropDown(toggleDropDown: () => void) {
  const navigate = useNavigate();

  const handleSubmit = (cat: CategoryData) => {
    navigate(`/products?category=${cat.title}`);
    toggleDropDown();
    // location.reload();
  };

  return { handleSubmit };
}
