import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import AddToCartButton from "../buttons/AddToCartButton";
import ProductCard from "../cards/card";
import ViewAllProductsButton from "../buttons/viewallproductsBTN";

// COUNTDOWN FUNCTION
const getRemainingTime = (endTime) => {
  const total = endTime - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

const FlashSales = () => {
  const { clothes } = useSelector((state) => state.data);


  // END TIME (بعد 4 أيام مثل التصميم)
  const endTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(getRemainingTime(endTime));

  // UPDATE COUNTDOWN EACH SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime(endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 w-full max-w-[1200px] mx-auto px-4">
      {/* HEADER ROW (Title + Arrows + Countdown) */}
      <div className="flex justify-between items-center">
        {/* LEFT TITLE */}
        <div>
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">Today’s</p>
          </div>

          <h2 className="text-3xl font-bold mt-1">Flash Sales</h2>
        </div>

        {/* COUNTDOWN */}
        <div className="flex gap-6 font-semibold text-center">
          <div>
            <p className="text-3xl">{String(timeLeft.days).padStart(2, "0")}</p>
            <p className="text-sm text-gray-500">Days</p>
          </div>

          <div>
            <p className="text-3xl">
              {String(timeLeft.hours).padStart(2, "0")}
            </p>
            <p className="text-sm text-gray-500">Hours</p>
          </div>

          <div>
            <p className="text-3xl">
              {String(timeLeft.minutes).padStart(2, "0")}
            </p>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>

          <div>
            <p className="text-3xl">
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
            <p className="text-sm text-gray-500">Seconds</p>
          </div>
        </div>

        {/* RIGHT ARROWS */}
        <div className="flex gap-4">
          <button className="swiper-button-prev-custom p-3 bg-gray-200 rounded-full hover:bg-gray-300">
            {"<"}
          </button>
          <button className="swiper-button-next-custom p-3 bg-gray-200 rounded-full hover:bg-gray-300">
            {">"}
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1300px] mx-auto">
        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mt-10 w-full"
        >
          {clothes?.slice(0, 10)?.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <div className="relative border rounded-xl p-2 flex flex-col justify-between h-full w-[200px] relative shadow-sm">
                {/* Discount */}
                <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-sm rounded z-20">
                  -40%
                </span>

                {/* Top icons */}
                <ProductCard item={item} />

                {/* ADD TO CART — stick to bottom */}
                <div>
                 <AddToCartButton item={item}/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* VIEW ALL PRODUCTS BUTTON */}
    <ViewAllProductsButton/>
    </div>
  );
};

export default FlashSales;
