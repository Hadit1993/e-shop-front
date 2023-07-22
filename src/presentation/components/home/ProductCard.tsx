import { FC } from "react";
import { ProdData } from "../../../static/data";
import useProductCard from "../../../lib/hooks/pageHooks/home/useProductCard";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductCard: FC<ProdData> = (props) => {
  const { name, imageUrl, shop, price, discountPrice, total_sell } = props;

  const { productName, isLiked, toggleLike, isOpen, makeOpen } =
    useProductCard(name);

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/products/${productName}`}>
          <img
            src={imageUrl[0].url}
            alt="product image"
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{shop.name}</h5>
        </Link>
        <Link to={`/products/${productName}`}>
          <h4 className="pb-3 font-medium">
            <span className="line-clamp-1">{name}</span>
          </h4>

          <div className="flex gap-2">
            <AiFillStar className="cursor-pointer" color="#F6BA00" size={20} />
            <AiFillStar className="cursor-pointer" color="#F6BA00" size={20} />
            <AiFillStar className="cursor-pointer" color="#F6BA00" size={20} />
            <AiFillStar className="cursor-pointer" color="#F6BA00" size={20} />
            <AiOutlineStar
              className="cursor-pointer"
              color="#F6BA00"
              size={20}
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <h5 className={`${styles.productDiscountPrice}`}>
                ${price === 0 ? price : discountPrice}
              </h5>
              {price > 0 && <h4 className={`${styles.price}`}>${price}</h4>}
            </div>
            <span className="text-base text-green-500">{total_sell} Sold</span>
          </div>
        </Link>
        <div className="cursor-pointer absolute right-2 top-5">
          {isLiked ? (
            <AiFillHeart
              size={22}
              onClick={toggleLike}
              color={"red"}
              title="Remove from wishlsit"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              onClick={toggleLike}
              color={"#333"}
              title="Add to wishlsit"
            />
          )}
        </div>

        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => makeOpen(true)}
          color="#333"
          title="Quick view"
        />

        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => makeOpen(true)}
          color="#444"
          title="Add to cart"
        />

        {isOpen && <ProductDetailsCard makeOpen={makeOpen} {...props} />}
      </div>
    </>
  );
};

export default ProductCard;
