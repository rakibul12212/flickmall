import { useEffect, useState } from "react";
import Card from "../../../Component/Ui/Card/Card";

const products = [
  {
    imageSrc: "https://i.ibb.co/47xyFfn/g92-2-500x500-1.png",
    sale: 40,
    productName: "Havit hV-G92 GamePad",
    DiscountPrice: 120,
    OriginalPrice: 160,
    initialRating: 5,
    review: 88,
  },
  {
    imageSrc: "https://i.ibb.co/RzvwJYW/Frame-612.png",
    sale: 35,
    productName: "AK-900 Wired Keyboard",
    DiscountPrice: 960,
    OriginalPrice: 1160,
    initialRating: 4,
    review: 75,
  },
  {
    imageSrc: "https://i.ibb.co/p0Mw3Q4/Frame-613.png",
    sale: 30,
    productName: "IPS LCD Gaming Monitor",
    DiscountPrice: 370,
    OriginalPrice: 400,
    initialRating: 5,
    review: 99,
  },
  {
    imageSrc: "https://i.ibb.co/TkFKvxb/Frame-614.png",
    sale: 25,
    productName: "S-Series Comfort Chair",
    DiscountPrice: 375,
    OriginalPrice: 430,
    initialRating: 4,
    review: 95,
  },
  {
    imageSrc: "https://i.ibb.co/VHrgkmK/Frame-604.png",
    sale: 15,
    productName: "ASUS FHD Gaming Laptop",
    DiscountPrice: 700,
    OriginalPrice: 805,
    initialRating: 5,
    review: 99,
  },
  {
    imageSrc: "https://i.ibb.co/GMRQmkr/Frame-604-2.png",
    sale: 35,
    productName: "S-Series Comfort Chair",
    DiscountPrice: 360,
    OriginalPrice: 486,
    initialRating: 5,
    review: 105,
  },
  {
    imageSrc: "https://i.ibb.co/VHrgkmK/Frame-604.png",
    sale: 15,
    productName: "ASUS FHD Gaming Laptop",
    DiscountPrice: 700,
    OriginalPrice: 805,
    initialRating: 5,
    review: 99,
  },
  {
    imageSrc: "https://i.ibb.co/GMRQmkr/Frame-604-2.png",
    sale: 35,
    productName: "S-Series Comfort Chair",
    DiscountPrice: 360,
    OriginalPrice: 486,
    initialRating: 5,
    review: 105,
  },
];

const FlashSale = () => {
  const [showAll, setShowAll] = useState(false);
  const [initialVisibleCount, setInitialVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1536) {
        // 2xl
        setInitialVisibleCount(6);
      } else if (window.innerWidth >= 1280) {
        // lg
        setInitialVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        // md
        setInitialVisibleCount(4);
      } else {
        // sm and below
        setInitialVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const visibleProducts = showAll
    ? products
    : products.slice(0, initialVisibleCount);

  return (
    <div className="pt-10 md:pt-28 px-2 md:px-24  ">
      <p className="text-red-500 border-l-8 border-rose-700 ps-3 py-2">
        Todays
      </p>
      <div className="flex flex-col md:flex-row  md:items-center gap-y-5 md:gap-x-16  py-5">
        <div>
          <p className="font-semibold text-4xl">Flash Sales </p>
        </div>
        <div className="flex items-end gap-3">
          <div>
            <p className="text-xs">Days</p>
            <p className="font-semibold text-3xl">03</p>
          </div>
          <div>
            <p className="text-red-500 font-semibold text-2xl pb-1">:</p>
          </div>
          <div>
            <p className="text-xs">Hours</p>
            <p className="font-semibold text-3xl">23</p>
          </div>
          <div>
            <p className="text-red-500 font-semibold text-2xl pb-1">:</p>
          </div>
          <div>
            <p className="text-xs">Minutes</p>
            <p className="font-semibold text-3xl">19</p>
          </div>
          <div>
            <p className="text-red-500 font-semibold text-2xl pb-1">:</p>
          </div>
          <div>
            <p className="text-xs">Seconds</p>
            <p className="font-semibold text-3xl">59</p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 lg:gap-6 pt-10 ">
          {visibleProducts.map((product, index) => (
            <Card
              key={index}
              imageSrc={product.imageSrc}
              sale={product.sale}
              productName={product.productName}
              DiscountPrice={product.DiscountPrice}
              OriginalPrice={product.OriginalPrice}
              initialRating={product.initialRating}
              review={product.review}
            />
          ))}
        </div>
        <div className="flex justify-center items-center min-w-screen pt-20">
          <button
            type="button"
            className="px-4 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
