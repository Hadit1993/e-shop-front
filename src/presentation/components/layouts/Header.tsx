import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import useHeader from "../../../lib/hooks/layoutHooks/useHeader";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { categoriesData } from "../../../static/data";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { FC } from "react";

interface HeaderProps {
  activeHeading: number;
}

const Header: FC<HeaderProps> = ({ activeHeading }) => {
  const {
    searchData,
    searchTerm,
    handleSearchChange,
    active,
    isExpanded,
    toggleDropDown,
    authStatus,
    isLoading,
    data,
  } = useHeader();

  return (
    <header>
      <div className={`${styles.section}`}>
        <div className="hidden md:h-12 md:my-5 md:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-6/12 relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-10 w-full px-2 border-blue-500 border-2 rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData.length > 0 && (
              <div className="absolute w-full  min-h-[30vh] bg-slate-50 shadow-sm z-10 p-4">
                {searchData.map((item) => {
                  const productPath = item.name.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${productPath}`}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={item.imageUrl[0].url}
                          alt="product image"
                          className="w-10 h-10 mr-2"
                        />
                        <h1>{item.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become seller <IoIosArrowForward className="ml-2" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-20" : ""
        } transition hidden md:flex items-center justify-between w-full bg-blue-600 h-[70px]`}
      >
        <div
          className={`${styles.section} ${styles.noramlFlex} relative justify-between`}
        >
          <div onClick={toggleDropDown}>
            <div className="relative h-14 mt-[14px] w-[270px] hidden lg:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-full w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-medium select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={toggleDropDown}
              />
              {isExpanded && (
                <DropDown
                  categories={categoriesData}
                  toggleDropDown={toggleDropDown}
                />
              )}
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <NavBar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-4">
                <AiOutlineHeart size={30} color="rgb(255 255 255)" />
                <span className="absolute right-0 top-0 rounded-full bg-teal-300 w-4 h-4 p-0 m-0 text-white font-mono text-xs leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-4">
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255)" />
                <span className="absolute right-0 top-0 rounded-full bg-teal-300 w-4 h-4 p-0 m-0 text-white font-mono text-xs leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-4">
                {authStatus === "Authenticated" ? (
                  <Link to="/profile">
                    {data && data.profileImage ? (
                      <img
                        src={data.profileImage}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    ) : (
                      <CgProfile size={30} color="rgb(255 255 255)" />
                    )}
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255)" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
