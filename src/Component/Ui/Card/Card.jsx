/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";

const Card = ({
  imageSrc,
  sale,
  category,
  productName,
  DiscountPrice,
  OriginalPrice,
  initialRating,
  review,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [loved, setLoved] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const toggleLove = () => {
    setLoved(!loved);
  };

  return (
    <div>
      <div>
        <div className="relative inline-block">
          <img
            src={imageSrc}
            alt={productName}
            className="p-12 w-[265px] h-[200px] md:h-[200px] bg-slate-100 rounded"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="p-2">Add To Cart</button>
          </div>
          <div>
            {sale && (
              <p className="absolute top-3 left-2 bg-red-500 text-white px-3 py-1 rounded text-sm">
                -{sale}%
              </p>
            )}
            {category && (
              <p className="absolute top-12 left-2 bg-green-500 text-white px-3 py-1 rounded text-sm">
                {category}
              </p>
            )}

            <button
              onClick={toggleLove}
              className="absolute top-3 right-2 bg-white p-2 rounded-full text-sm"
              id="love"
              aria-label="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={loved ? "red" : "none"} // Fill red if loved
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.9}
                className="size-5"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>

            <a
              href="#"
              className="absolute top-14 right-2 bg-white p-2 rounded-full text-sm"
              id="zoom"
              aria-label="View details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="py-1 font-semibold text-xl">{productName}</p>
          <p className="flex gap-3 pt-1">
            {DiscountPrice && (
              <span className="text-rose-500 font-medium text-base">
                ${DiscountPrice}
              </span>
            )}
            {OriginalPrice && (
              <s className="text-slate-400">${OriginalPrice}</s>
            )}
          </p>
          <div className="flex items-center gap-2 py-1">
            <div className="rating">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={starValue}
                    className={starValue <= rating ? "star filled" : "star"}
                    onClick={() => handleStarClick(starValue)}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
            <div>
              <p className="text-slate-400">({review})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
