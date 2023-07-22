import { ChangeEventHandler, useEffect, useState } from "react";
import { ProdData, productData } from "../../../static/data";
import { useAppSelector } from "../reduxHooks";
import { useGetProfileQuery } from "../../../application/auth/authApi";

export default function useHeader() {
  const [searchTerm, changeSearchterm] = useState("");
  const [searchData, updateSearchData] = useState<ProdData[]>([]);
  const [active, setActive] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  useEffect(() => {
    addEventListener("scroll", () => {
      setActive(scrollY > 90);
    });
  }, []);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const term = event.target.value;
    changeSearchterm(term);
    if (term.trim().length === 0) updateSearchData([]);
    else {
      const filteredProductsData = productData.filter((prod) =>
        prod.name.toLowerCase().includes(term.toLowerCase())
      );
      updateSearchData([...filteredProductsData]);
    }
  };

  const toggleDropDown = () => setExpanded(!isExpanded);
  const { isLoading, data } = useGetProfileQuery();

  return {
    searchTerm,
    searchData,
    handleSearchChange,
    active,
    isExpanded,
    toggleDropDown,
    authStatus,
    isLoading,
    data,
  };
}
