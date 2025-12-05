import { Link } from "react-router-dom";


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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">

        {/* PlayStation */}
        <div className="relative rounded-xl overflow-hidden h-[260px]">
          <img
            src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
            alt="men's fashion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 p-6 flex items-end">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">men's fashion</h3>
              <p className="text-sm text-gray-300 mb-4">
                Blazing-fast performance and stunning graphics for next-gen gaming.
              </p>
              <Link to="/home">
                <button className="border border-white px-4 py-2 rounded text-sm text-white">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Small Cards */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[260px]">

          {/* Women Collection */}
          <div className="relative row-span-2 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1857000/pexels-photo-1857000.jpeg"
              alt="Women's Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-white mb-2">Women’s Collections</h3>
                <p className="text-xs text-gray-300">
                  Featured women fashion that gives you another vibe.
                </p>
              </div>
              <Link to="/home">
                <button className="border border-white px-3 py-1 rounded text-xs text-white w-fit">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Speakers */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="Speakers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/80 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold mb-2 text-black">Speakers</h3>
                <p className="text-xs text-gray-700">Amazon wireless speakers.</p>
              </div>
              <Link href="/home">
                <button className="border border-black px-3 py-1 rounded text-xs w-fit">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Perfume */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1653085/pexels-photo-1653085.jpeg"
              alt="Perfume"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-white/20 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold mb-2 text-black">Perfume</h3>
                <p className="text-xs text-gray-700">GUCCI INTENSE OUD EDP.</p>
              </div>
              <Link to="/home">
                <button className="border border-black px-3 py-1 rounded text-xs w-fit">
                  Shop Now
                </button>
              </Link>
            </div>
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
          <p className="text-xs text-gray-600">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            ☎️
          </div>
          <h4 className="font-semibold">24/7 CUSTOMER SERVICE</h4>
          <p className="text-xs text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
            💸
          </div>
          <h4 className="font-semibold">MONEY BACK GUARANTEE</h4>
          <p className="text-xs text-gray-600">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
