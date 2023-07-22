import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../../../../static/data";

export default function useProducts(isBestSelling: boolean = false) {
  const [searchParams] = useSearchParams();

  const category = useMemo(() => searchParams.get("category"), [searchParams]);

  const products = useMemo(() => {
    if (category && !isBestSelling)
      return productData.filter((prod) => prod.category === category);
    else return productData.sort((a, b) => a.total_sell - b.total_sell);
  }, [category, isBestSelling]);

  return products;
}
