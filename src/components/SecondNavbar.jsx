import SearchIcon from "../assets/search.svg";

const SecondNavbar = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="h-[3rem] mt-4 mb-8 flex justify-between items-center bg-furfle rounded-lg px-4">
        {/* link tabs */}
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
    </div>
  );
};

export default SecondNavbar;
