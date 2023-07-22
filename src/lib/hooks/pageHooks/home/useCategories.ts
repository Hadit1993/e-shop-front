import { useNavigate } from "react-router-dom";
import { CategoryData } from "../../../../static/data";

export default function useCategories() {
  const navigate = useNavigate();
  const handleSubmit = (cat: CategoryData) =>
    navigate(`/products?category=${cat.title}`);
  return { handleSubmit };
}
