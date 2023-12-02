import GameCard from "./GameCard";
import SearchIcon from "../assets/search.svg";
import Hitman from "../assets/hitman.jpg";
import "../scripts/carousel.js";

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

const Carousel = () => {
  return (
    <div id="carousel" className="carousel-container">
      <div className="carousel-wrapper flex gap-8" id="carouselWrapper">
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
        <GameCard headerimage={Hitman} tags={["Action", "RPG", "Adventure"]} />
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <div
      id="hero"
      className="z-50 w-[100%] h-[100vh] opacity-90 flex flex-col items-center bg-lavander"
    >
      {/* Second Navbar */}
      <SecondNavbar />
      {/* Heading */}
      <h1 className="text-2xl mb-8 mx-6 text-white">Featured & Recommended</h1>
      {/* Carousel */}
      <Carousel />
    </div>
  );
};

export default Hero;
