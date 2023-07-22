import { productData } from "../../../static/data";
import styles from "../../styles/styles";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8 mb-12 border-0">
          {productData.map((prod) => (
            <ProductCard {...prod} key={prod.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
