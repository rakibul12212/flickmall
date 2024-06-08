import  { useEffect, useState } from "react";
import AllProductCard from "../../../Component/Ui/AllProductCard/AllProductCard";


const products = [
    {
        imageSrc: "https://i.ibb.co/L86NnGL/dog-food.png",
        productName: "Breed Dry Dog Food",
        Price: 100,
        initialRating: 3,
        review: 35,
      },
      {
        imageSrc: "https://i.ibb.co/GMRQmkr/Frame-604-2.png",
        productName: "CANON EOS DSLR Camera",
        Price: 360,
        initialRating: 4,
        review: 95,
      },
      {
        imageSrc: "https://i.ibb.co/VHrgkmK/Frame-604.png",
        productName: "ASUS FHD Gaming Laptop",
        Price: 700,
        initialRating: 5,
        review: 325,
      },
      {
        imageSrc: "https://i.ibb.co/k4T1gH2/facewaash.png",
        productName: "Curology Product Set ",
        Price: 500,
        initialRating: 4,
        review: 145,
      },
      {
        imageSrc: "https://i.ibb.co/2hynzZK/car.png",
        category:'new',
        productName: "Kids Electric Car",
        Price: 960,
        initialRating: 5,
        review: 65,
      },
      {
        imageSrc: "https://i.ibb.co/DCS1CQF/shoe.png",
        productName: "Jr. Zoom Soccer Cleats",
        Price: 1160,
        initialRating: 5,
        review: 35,
      },
      {
        imageSrc: "https://i.ibb.co/GdByKrS/controller.png",
        category:'new',
        productName: "GP11 Shooter USB Gamepad",
        Price: 660,
        initialRating: 4,
        review: 55,
      },
      {
        imageSrc: "https://i.ibb.co/6WQjnCG/jacket.png",
        productName: "Quilted Satin Jacket",
        Price: 500,
        initialRating: 5,
        review: 65,
      },
//  ----------------
{
    imageSrc: "https://i.ibb.co/5MHGkJJ/Frame-605.png",
    productName: "The north coat",
    Price: 260,
    initialRating: 5,
    review: 65,
  },
  {
    imageSrc: "https://i.ibb.co/dt0zm4y/bag.png",
    productName: "Gucci duffle bag",
    category: "new",
    Price: 960,
    initialRating: 5,
    review: 65 ,
  },
  {
    imageSrc: "https://i.ibb.co/dPfdrjv/Frame-610.png",
    productName: "RGB liquid CPU Cooler",
    Price: 150,
    initialRating: 5,
    review: 78,
  },
  {
    imageSrc: "https://i.ibb.co/vVvq8WB/table.png",
    productName: "Small BookSelf",
    Price: 360,
    initialRating: 5,
    review: 88,
  },

  {
    imageSrc: "https://i.ibb.co/47xyFfn/g92-2-500x500-1.png",
    productName: "Havit hV-G92 GamePad",
    Price: 120,
    initialRating: 5,
    review: 88,
  },
  {
    imageSrc: "https://i.ibb.co/RzvwJYW/Frame-612.png",
    productName: "AK-900 Wired Keyboard",
    Price: 960,
    initialRating: 4,
    review: 75,
  },
  {
    imageSrc: "https://i.ibb.co/p0Mw3Q4/Frame-613.png",
    productName: "IPS LCD Gaming Monitor",
    Price: 370,
    initialRating: 5,
    review: 99,
  },
  {
    imageSrc: "https://i.ibb.co/TkFKvxb/Frame-614.png",
    productName: "S-Series Comfort Chair",
    Price: 375,
    initialRating: 4,
    review: 95,
  },
  
];

const OurProduct = () => {
  const [showAll, setShowAll] = useState(false);
  const [initialVisibleCount, setInitialVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1536) {
        // 2xl
        setInitialVisibleCount(6);
      } else if (window.innerWidth >= 1280) {
        // lg
        setInitialVisibleCount(8);
      } else if (window.innerWidth >= 768) {
        // md
        setInitialVisibleCount(8);
      } else {
        // sm and below
        setInitialVisibleCount(6);
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
        Our Products
      </p>
      <div className="flex flex-col md:flex-row  md:items-center gap-y-5 md:gap-x-16  py-5">
        <div>
          <p className="font-semibold text-4xl">Explore Our Products </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 lg:gap-6 pt-10 ">
          {visibleProducts.map((product, index) => (
            <AllProductCard
              key={index}
              imageSrc={product.imageSrc}
              category={product.category}
              productName={product.productName}
              Price={product.Price}
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

export default OurProduct;
