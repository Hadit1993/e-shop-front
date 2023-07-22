import useBestDeals from "../../../lib/hooks/pageHooks/home/useBestDeals";
import styles from "../../styles/styles";
import ProductCard from "./ProductCard";

const BestDeals = () => {
  const { data } = useBestDeals();

  return (
    <div>
      <section className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8 mb-12 border-0">
          {data.map((item, ind) => (
            <ProductCard key={ind} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestDeals;
