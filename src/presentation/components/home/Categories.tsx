import useCategories from "../../../lib/hooks/pageHooks/home/useCategories";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../styles/styles";

const Categories = () => {
  const { handleSubmit } = useCategories();
  return (
    <>
      <section className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData.map((brand, ind) => (
            <div key={ind} className="flex items-start">
              {brand.icon}
              <div className="px-3">
                <h3 className="font-bold text-sm md:text-base">
                  {brand.title}
                </h3>
                <p className="text-xs md:text-sm">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-8">
          {categoriesData.map((cat) => (
            <div
              className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
              key={cat.id}
              onClick={() => handleSubmit(cat)}
            >
              <h5 className="text-lg">{cat.title}</h5>
              <img
                src={cat.imageUrl}
                alt="category image"
                className="w-[120px] object-cover rounded"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
