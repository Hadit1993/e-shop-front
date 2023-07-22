import useProducts from "../../../lib/hooks/pageHooks/products/useProducts";
import ProductCard from "../../components/home/ProductCard";
import Header from "../../components/layouts/Header";
import styles from "../../styles/styles";

const ProductsPage = () => {
  const products = useProducts();
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={styles.section}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-7 mb-12 ">
          {products.length > 0 && (
            <>
              {products.map((prod) => (
                <ProductCard {...prod} key={prod.id} />
              ))}
            </>
          )}
        </div>
        {products.length === 0 && (
          <h1 className="text-center w-full pb-24 text-[20px]">
            {" "}
            No Products Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
