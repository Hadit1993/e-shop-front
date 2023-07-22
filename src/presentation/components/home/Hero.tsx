import { Link } from "react-router-dom";
import styles from "../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} bg-origin-border  bg-[url('https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg')]`}
    >
      <div className={`${styles.section} w-[90%] md:w-[60%]`}>
        <h1
          className={`text-4xl leading-[1.2] md:text-6xl text-gray-700 font-semibold capitalize`}
        >
          Best Collections for <br /> home Decoration
        </h1>
        <p className="pt-5 text-base font-[Poppins] font-normal text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit
          consequuntur at id quibusdam neque rerum officiis ratione voluptates
          beatae vel ducimus velit mollitia, modi exercitationem sequi magni
          dolore quo.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button}`}>
            <span className="text-white font-[Poppins] text-lg">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
