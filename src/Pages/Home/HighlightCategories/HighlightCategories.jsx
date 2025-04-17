import React, { useEffect, useState } from "react";
import "./HighlightCategories.css";
import img from "../../../../public/jbl.png";

const HighlightCategories = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    days: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setMinutes(targetDate.getMinutes() + 59);
    targetDate.setSeconds(targetDate.getSeconds() + 35);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10 md:py-20 px-2 md:px-24">
      <div className="highlightCategoriesBg">
        <div className="py-10 px-5 flex flex-col md:flex-row justify-evenly items-center">
          <div>
            <p className="py-5 text-green-400">Categories</p>
            <p className="text-white font-bold text-4xl sm:text-3xl md:text-6xl">
              <span>Enhance Your </span>
              <br />
              <span>Music Experience</span>
            </p>
            <div className="flex flex-row items-center gap-x-4 py-8">
              <div className="bg-white py-3 px-4 flex flex-col justify-center rounded-full items-center">
                <p>{timeLeft.hours}</p>
                <p className="text-xs">Hours</p>
              </div>
              <div className="bg-white py-3 px-5 flex flex-col justify-center rounded-full items-center">
                <p>{timeLeft.days}</p>
                <p className="text-xs">Days</p>
              </div>
              <div className="bg-white py-3 px-5 flex flex-col justify-center rounded-full items-center">
                <p>{timeLeft.minutes}</p>
                <p className="text-xs">Mins</p>
              </div>
              <div className="bg-white py-3 px-5 flex flex-col justify-center rounded-full items-center">
                <p>{timeLeft.seconds}</p>
                <p className="text-xs">Secs</p>
              </div>
            </div>
            <div className="pb-8">
              <button className="px-5 py-2 text-white bg-green-500 hover:bg-green-600">
                Buy Now !
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCategories;
