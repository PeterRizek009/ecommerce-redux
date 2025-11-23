import Sidebar from "./Sidebar";
import HeroSlider from "./HeroSlider";
import FlashSales from "./FlashSales";
import NewArrival from './NewArrival';
import ExploreProducts from './ExploreProducts';
import BestSellingProducts from './BestSellingProducts';
import BrowseByCategory from './BrowseByCategory';

const LandingPage = () => {
  return (
    <div className="w-full">

      {/* Layout مع الـ Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 md:px-8 mt-6">
        <div className="hidden lg:block col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-4">
          <HeroSlider />
       
        </div>
      </div>

      {/* باقي الأقسام بعرض كامل */}
         <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      {/* <MusicHero /> */}
      <ExploreProducts />
      <NewArrival />
    </div>
  );
};

export default LandingPage;
