import GameCard from "./GameCard";
import Hitman from "../assets/hitman.jpg";
import Carousel from "nuka-carousel";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const FnRCarousel = () => {
  return (
    <div id="hero" className="z-50 w-[100%] flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-8 mx-6 text-white">
        Featured & Recommended
      </h1>
      <div id="carousel" className="carousel-containe w-[900px] h-[380px]">
        <Carousel
          adaptiveHeight="true"
          adaptiveHeightAnimation="false"
          autoplay="true"
          autoplayInterval="5000"
          wrapAround="true"
          swiping="false"
          defaultControlsConfig={{
            pagingDotsClassName: "pagingDotsClassName",
            nextButtonClassName: "nextButtonClassName",
            prevButtonClassName: "prevButtonClassName",
            nextButtonText: (
              <MdOutlineKeyboardArrowRight className="text-4xl" />
            ),
            prevButtonText: <MdOutlineKeyboardArrowLeft className="text-4xl" />,
          }}
          className="flex overflow-visible h-[380px]"
        >
          <GameCard
            headerimage={Hitman}
            tags={["Action", "RPG", "Adventure"]}
          />
          <GameCard
            headerimage={Hitman}
            tags={["Action", "RPG", "Adventure"]}
          />
          <GameCard
            headerimage={Hitman}
            tags={["Action", "RPG", "Adventure"]}
          />
          <GameCard
            headerimage={Hitman}
            tags={["Action", "RPG", "Adventure"]}
          />
          <GameCard
            headerimage={Hitman}
            tags={["Action", "RPG", "Adventure"]}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default FnRCarousel;
