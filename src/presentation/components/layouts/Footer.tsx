import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center px-4 bg-blue-900 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-green-400">Subscribe</span> us for get news,
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-green-400 hover:bg-teal-500 transition duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            className="brightness-0 invert"
          />
          <br />
          <p>The home and elements needed to create beautiful products.</p>
          <div className="flex items-center mt-4 gap-4">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiFillInstagram size={25} className="cursor-pointer" />
            <AiOutlineTwitter size={25} className="cursor-pointer" />
            <AiFillYoutube size={25} className="cursor-pointer" />
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 Becodemy. All rights reserved.</span>
        <span>Terms and Privacy Policy </span>
        <div className=" flex items-center justify-center md:w-full gap-2">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo-500x281.png"
            alt=""
            className="w-20 bg-white px-2"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo-700x394.png"
            alt=""
            className="w-20 bg-white px-2"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-700x394.png"
            alt=""
            className="w-20 bg-white px-2"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo-700x394.png"
            alt=""
            className="w-20 bg-white px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
