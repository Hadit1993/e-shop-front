import { useEffect, useState } from "react";
import { ProdData, productData } from "../../../../static/data";

export default function useBestDeals() {
  const [data, setDate] = useState<ProdData[]>([]);

  useEffect(() => {
    const sortedProducts = productData
      .sort((a, b) => b.total_sell - a.total_sell)
      .slice(0, 5);
    setDate(sortedProducts);
  }, []);

  return { data };
}
