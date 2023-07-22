import styles from "../../styles/styles";

const logos = [
  "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo-700x394.png",
  "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016-700x394.png",
  "https://logos-world.net/wp-content/uploads/2020/05/LG-Logo-700x394.png",
  "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo-1998-present-700x394.png",
  "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-700x394.png",
];

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        {logos.map((logo) => (
          <div className="flex items-start">
            <img src={logo} alt="" className="w-[150px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsored;
