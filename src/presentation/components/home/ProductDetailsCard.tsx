import { FC } from "react";
import { ProdData } from "../../../static/data";
import useProductDetailsCard from "../../../lib/hooks/pageHooks/home/useProductDetailsCard";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

interface ProductDetailsCard extends ProdData {
  makeOpen: (open: boolean) => void;
}

const ProductDetailsCard: FC<ProductDetailsCard> = ({
  makeOpen,
  imageUrl,
  shop,
  total_sell,
  name,
  description,
  discountPrice,
  price,
}) => {
  const {
    count,
    incrementCount,
    decrementCount,
    handleMessageSubmit,
    isClicked,
    toggleClick,
  } = useProductDetailsCard();

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
      <div className=" w-[90%] md:w-[60%] h-[90vh] overflow-y-scroll md:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
        <RxCross1
          size={30}
          className="absolute right-3 top-3 z-50"
          onClick={() => makeOpen(false)}
        />
        <div className="block w-full md:flex">
          <div className="w-full md:w-[50%]">
            <img src={imageUrl[0].url} />
            <div className="flex">
              <img
                src={shop.shopAvatar.url}
                className="w-12 h-12 rounded-full mr-2"
              />
              <div>
                <h3 className={styles.shop_name}>{shop.name}</h3>
                <h5 className="pb-3 text-[15px]">({shop.ratings}) Ratings</h5>
              </div>
            </div>
            <div
              className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}
              onClick={handleMessageSubmit}
            >
              <span className="text-white flex items-center">
                Send Message <AiOutlineMessage className="ml-1" />
              </span>
            </div>
            <h5 className="text-[16px] text-red-500 mt-5">
              ({total_sell}) Sold out
            </h5>
          </div>
          <div className="w-full md:w-[800px] pt-5 pl-[5px] pr-[5px]">
            <h1 className={`${styles.productTitle} text-[20px] mb-5`}>
              {name}
            </h1>
            <p>{description}</p>
            <div className="flex pt-3 items-center">
              <h4 className={styles.productDiscountPrice}>{discountPrice}$</h4>
              {price && <h3 className={styles.price}>{price}$</h3>}
            </div>
            <div className="flex items-center mt-12 justify-between pr-3">
              <div>
                <button
                  onClick={decrementCount}
                  className="
              bg-gradient-to-r
               from-teal-400 
               to-teal-500 
               text-white 
               font-bold 
               rounded-l 
               px-4 
               py-2 
               shadow-lg 
               hover:opacity-75
               transition 
               duration-300
               ease-in-out"
                >
                  -
                </button>
                <span className="bg-gray-200 text-gray-600 font-medium px-4 py-[11px]">
                  {count}
                </span>
                <button
                  onClick={incrementCount}
                  className="
              bg-gradient-to-r
               from-teal-400 
               to-teal-500 
               text-white 
               font-bold 
               rounded-r
               px-4 
               py-2 
               shadow-lg 
               hover:opacity-75
               transition 
               duration-300
               ease-in-out"
                >
                  +
                </button>
              </div>

              <div>
                {isClicked ? (
                  <AiFillHeart
                    size={30}
                    className="cursor-pointer"
                    onClick={toggleClick}
                    color="red"
                    title="remove from wishlist"
                  />
                ) : (
                  <AiOutlineHeart
                    size={30}
                    className="cursor-pointer"
                    onClick={toggleClick}
                    color="red"
                    title="add to wishlist"
                  />
                )}
              </div>
            </div>
            <div
              className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
            >
              <span className="text-white flex items-center">
                Add to cart <AiOutlineShoppingCart className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
