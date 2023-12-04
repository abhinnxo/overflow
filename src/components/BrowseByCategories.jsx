import Carousel from "nuka-carousel";
import {
  action,
  casual,
  strategy,
  simulation,
  horror,
  rpg,
  anime,
  racing} from "../assets/";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({fromColor, categoryName, bgcimage}) => {
  return (
    <div className="h-[300px] w-[300px] relative mx-5">
      <div className={`z-10 bg-gradient-to-t ${fromColor} to-none absolute h-[100%] w-[100%]`}></div>
      <h1                 
        className="text-2xl font-bold z-20 absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white"
      >
        {categoryName}
      </h1>
      <img src={bgcimage} alt="action image" className="absolte h-[100%] w-[100%]" />
    </div>
  );
};

const BrowseByCategories = () => {
  return (
    <div className="pb-24 w-[100%]  ">
      <h1 className="text-2xl text-center font-semibold my-10 text-white">
        Browse By Categories
      </h1>
      <div className="flex justify-center">
        <div className="w-[1355px] h-[300px]">
          <Carousel
            adaptiveHeight="true"
            adaptiveHeightAnimation="false"
            wrapAround="true"
            swiping="false"
            slidesToShow="4"
            defaultControlsConfig={{
              pagingDotsClassName: "pagingDotsClassName",
              nextButtonClassName: "nextButtonClassName",
              prevButtonClassName: "prevButtonClassName",
              nextButtonText: (
                <MdOutlineKeyboardArrowRight className="text-4xl" />
              ),
              prevButtonText: (
                <MdOutlineKeyboardArrowLeft className="text-4xl" />
              ),
            }}  
            className="h-[300px] text-white"
          >      
            <CategoryCard fromColor="from-red-800" categoryName="ACTION"  bgcimage={action} />
            <CategoryCard fromColor="from-green-500" categoryName="STRATEGY"  bgcimage={strategy} />
            <CategoryCard fromColor="from-blue-600" categoryName="SIMULATOR"  bgcimage={simulation} />
            <CategoryCard fromColor="from-yellow-400" categoryName="HORROR"  bgcimage={horror} />
            <CategoryCard fromColor="from-pink-600" categoryName="ROLEPLAYING"  bgcimage={rpg} />
            <CategoryCard fromColor="from-yellow-900" categoryName="ANIME"  bgcimage={anime} />
            <CategoryCard fromColor="from-green-500" categoryName="CASUAL"  bgcimage={casual} />
            <CategoryCard fromColor="from-fuchsia-700" categoryName="RACING"  bgcimage={racing} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategories;
