import { FC } from "react";
import { productData } from "../../../static/data";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard: FC<{ active?: boolean }> = ({ active }) => {
  const product = productData[1];
  return (
    <div
      className={`w-full block bg-white rounded-lg lg:flex p-2 ${
        active ? "unset" : "mb-12"
      }`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img src={product.imageUrl[0].url} alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={styles.productTitle}>{product.shop.name}</h2>
        <p>{product.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-medium text-[18px] text-red-400 pr-3 line-through">
              {product.price}$
            </h5>
            <h5 className="font-bold text-[20px] text-gray-700 font-Roboto">
              {product.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-normal text-[17px] text-green-400">
            {product.total_sell} sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
