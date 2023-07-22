import { useState } from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import styles from "../../styles/styles";

const FaqPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <div className={`${styles.section} my-8`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
        <div className="mx-auto space-y-4">
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setExpanded(!isExpanded)}
      >
        <span className="text-lg font-medium text-gray-900">
          How do I track my order?
        </span>
        {isExpanded ? (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>

      {isExpanded && (
        <div className="mt-4">
          <p className="text-base text-gray-500">
            We typically process and ship orders within 1-2 business days.
            Depending on your location, it can take an additional 2-7 days for
            your order to arrive
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqPage;
