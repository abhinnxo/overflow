import GameCard from "./GameCard";
import SearchIcon from "../assets/search.svg";
import Hitman from "../assets/hitman.jpg";
import Carousel from "nuka-carousel"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md";


const SecondNavbar = () => {
  return (
    <div className="h-[3rem] mt-28 mb-8 flex justify-between items-center bg-furfle rounded-lg px-4 lg:container">
      <div className="text-white flex gap-4">
        <a
          href="/"
          className="pointer hover:bg-white hover:text-furfle px-4 py-2 rounded"
        >
          Home
        </a>
        <a
          href="/"
          className="pointer hover:bg-white hover:text-furfle px-4 py-2 rounded"
        >
          Library
        </a>
        <a
          href="/"
          className="pointer hover:bg-white hover:text-furfle px-4 py-2 rounded"
        >
          Top Sellers
        </a>
        <a
          href="/"
          className="pointer hover:bg-white hover:text-furfle px-4 py-2 rounded"
        >
          Coming Soon
        </a>
        <a
          href="/"
          className="pointer hover:bg-white hover:text-furfle px-4 py-2 rounded"
        >
          News & Updates
        </a>
      </div>
      {/* Searchbar */}
      <div
        id="navbar-search"
        className="py-1 pl-10 pr-4 rounded-lg bg-white w-fit"
      >
        <img id="navbar-search-icon" src={SearchIcon} width="20px" alt="" />
        <input
          type="search"
          id="gsearch"
          placeholder="search..."
          name="gsearch"
          className="bg-transparent w-[350px] placeholder:text-black text-black"
        />
      </div>
    </div>
  );
};

const FnRCarousel = () => {
  return (
    <div id="carousel" className="carousel-containe w-[900px] h-[380px]">
      <Carousel
       adaptiveHeight='true' 
       adaptiveHeightAnimation="false" 
       autoplay="true"
       autoplayInterval="5000"
       wrapAround="true"
       swiping="false"
       defaultControlsConfig={{
        pagingDotsClassName: "pagingDotsClassName",
        nextButtonClassName: "nextButtonClassName",
        prevButtonClassName: "prevButtonClassName",
        nextButtonText: <MdOutlineKeyboardArrowRight className="text-4xl" />,
        prevButtonText: <MdOutlineKeyboardArrowLeft  className="text-4xl" />,
       }}
      className="flex overflow-visible h-[380px]">
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} /> 
      </Carousel>
    </div>
  );
};
const Hero = () => {
  return (
    <div  
      id="hero"
      className="z-50 w-[100%] pb-24 opacity-90 flex flex-col items-center bg-lavander"
    >
      {/* Second Navbar */}
      <SecondNavbar />
      {/* Heading */}
      <h1 className="text-2xl mb-8 mx-6 text-white">Featured & Recommended</h1>
      {/* Carousel */}
      <FnRCarousel />
    </div>
  );
};

export default Hero;
