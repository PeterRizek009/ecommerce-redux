import React, { useEffect, useState } from "react";
import { filterByPrice, filterBySearch } from "../../store/dataSlice";
import { useDispatch } from "react-redux";
import sidelogo from "./sidelogo.png";
import StarRating from "../StarRating/starrating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Filter = () => {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(true);
  const [term, setTerm] = useState("");
  const [slider, setSlider] = useState({
    value: 0,
    min: 0,
    max: 500,
  });

  // HANDLE WINDOW RESIZE
  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // PRICE FILTER
  useEffect(() => {
    dispatch(filterByPrice(Number(slider.value)));
  }, [slider.value, dispatch]);

  // SEARCH FILTER (instant, no delay)
  useEffect(() => {
    dispatch(filterBySearch(term));
  }, [term, dispatch]);

  // MOBILE FILTER SECTION
  const filterSectionInMobile = () => (
    <>
      <div
        className="flex items-center justify-center min-w-[25px] h-8 border-gray-300 shadow-md mt-8 text-white bg-red-500 hover:bg-indigo-600 rounded text-sm cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <FontAwesomeIcon icon={toggle ? faArrowLeft : faArrowRight} />
      </div>

      {toggle && (
        <motion.div animate={{ marginLeft: "5px" }}>

          {/* MOBILE SIDEBAR */}
          <aside className="block w-[240px] min-h-[100vh] shadow-sm">
            <div className="flex flex-wrap justify-center">

              {/* LOGO */}
              <div className="w-full mx-2 my-8">
                <img src={sidelogo} alt="logo" className="block mx-auto" />
              </div>

              {/* SEARCH */}
              <div className="w-full mx-2 my-6">
                <div className="relative flex items-center w-full h-10 bg-white border-2 rounded-lg">
                  <div className="grid place-items-center h-full w-10 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    placeholder="Search..."
                    className="w-full outline-none text-sm px-2"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* PRICE FILTER */}
              <div className="w-full mx-4 my-8">
                <label className="block mb-2 text-md font-medium">Price (USD)</label>

                <input
                  type="range"
                  step={1}
                  value={slider.value}
                  min={slider.min}
                  max={slider.max}
                  className="range range-xs range-error w-full"
                  onChange={(e) =>
                    setSlider({
                      ...slider,
                      value: Number(e.target.value),
                    })
                  }
                />

                <div className="flex justify-between py-4">
                  <input
                    type="number"
                    className="w-20 p-2 border rounded-md"
                    value={slider.value}
                    onChange={(e) =>
                      setSlider({
                        ...slider,
                        value: Number(e.target.value),
                      })
                    }
                  />
                  <span className="mx-2 py-1">-</span>
                  <input
                    type="number"
                    className="w-20 p-2 border rounded-md"
                    value={slider.max}
                    readOnly
                  />
                </div>
              </div>

              <StarRating />
            </div>
          </aside>
        </motion.div>
      )}
    </>
  );

  // DESKTOP FILTER
  const filterDesktop = () => (
    <aside className="block w-[250px] min-h-[100vh] shadow-sm mr-4">

      <div className="flex flex-wrap justify-center">

        {/* LOGO */}
        <div className="w-full mx-6 my-10">
          <img src={sidelogo} alt="logo" className="block mx-auto" />
        </div>

        {/* SEARCH */}
        <div className="w-full mx-6 my-6">
          <div className="relative flex items-center w-full h-12 bg-white border-2 rounded-lg hover:border-orange-500">
            <div className="grid place-items-center h-full w-12 text-orange-600">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-sm px-2"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>

        {/* PRICE FILTER */}
        <div className="w-full mx-6 my-8">
          <label className="block mb-2 font-medium">Price (USD)</label>

          <input
            type="range"
            value={slider.value}
            min={slider.min}
            max={slider.max}
            step={1}
            className="range range-xs range-error w-full"
            onChange={(e) =>
              setSlider({
                ...slider,
                value: Number(e.target.value),
              })
            }
          />

          <div className="flex justify-between py-4">
            <input
              type="number"
              value={slider.value}
              className="w-20 p-2 border rounded-md"
              onChange={(e) =>
                setSlider({
                  ...slider,
                  value: Number(e.target.value),
                })
              }
            />
            <span>-</span>
            <input
              type="number"
              value={slider.max}
              readOnly
              className="w-20 p-2 border rounded-md"
            />
          </div>
        </div>

        <StarRating />
      </div>
    </aside>
  );

  return windowWidth > 570 ? filterDesktop() : filterSectionInMobile();
};

export default Filter;
