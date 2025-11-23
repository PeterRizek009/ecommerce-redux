const NewArrival = () => {
  return (
    <section className="mt-20 w-full max-w-[1200px] mx-auto px-4 mb-20">
      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-2 h-6 bg-red-500 rounded"></div>
          <p className="text-red-500 font-semibold">Featured</p>
        </div>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>

      {/* Grid of banners (PS5 + 3 كروت) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        {/* PS5 */}
        <div className="bg-black text-white rounded-xl p-6 flex items-end h-[260px]">
          <div>
            <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
            <p className="text-sm text-gray-300 mb-4">
              Blazing-fast performance and stunning graphics for next-gen gaming.
            </p>
            <button className="border border-white px-4 py-2 rounded text-sm">
              Shop Now
            </button>
          </div>
        </div>

        {/* 3 كروت صغيرة */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[260px]">
          <div className="row-span-2 bg-gray-900 text-white rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Women’s Collections</h3>
              <p className="text-xs text-gray-300">
                Featured women fashion that gives you another vibe.
              </p>
            </div>
            <button className="border border-white px-3 py-1 rounded text-xs w-fit">
              Shop Now
            </button>
          </div>
          <div className="bg-gray-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Speakers</h3>
              <p className="text-xs text-gray-700">
                Amazon wireless speakers.
              </p>
            </div>
            <button className="border border-black px-3 py-1 rounded text-xs w-fit">
              Shop Now
            </button>
          </div>
          <div className="bg-gray-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Perfume</h3>
              <p className="text-xs text-gray-700">
                GUCCI INTENSE OUD EDP.
              </p>
            </div>
            <button className="border border-black px-3 py-1 rounded text-xs w-fit">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Services Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            🚚
          </div>
          <h4 className="font-semibold">FREE AND FAST DELIVERY</h4>
          <p className="text-xs text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            ☎️
          </div>
          <h4 className="font-semibold">24/7 CUSTOMER SERVICE</h4>
          <p className="text-xs text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            💸
          </div>
          <h4 className="font-semibold">MONEY BACK GUARANTEE</h4>
          <p className="text-xs text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
