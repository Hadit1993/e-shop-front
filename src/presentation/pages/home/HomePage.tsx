import BestDeals from "../../components/home/BestDeals";
import Categories from "../../components/home/Categories";
import Events from "../../components/home/Events";
import FeaturedProduct from "../../components/home/FeaturedProduct";
import Hero from "../../components/home/Hero";
import Sponsored from "../../components/home/Sponsored";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
