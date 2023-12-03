import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import Hitman from "../assets/hitman.jpg";

const SpecialOffers = () => {
  const [wishlistState, setWishlistState] = useState(false);

  const Card = () => {
    return (
      <div className="gamecard carousel-item w-[380px] rounded bg-furfle">
        <div className="w-[380px]">
          <div className="absolute text-white">
            <span className="absolute font-semibold mt-4 ml-2.5">-99%</span>
            <FaBookmark className="text-red-600 text-6xl" />
          </div>
          <img
            src={Hitman}
            alt="pic"
            className="w-[620px] h-[100%]"
            id="hero-car-game-img"
          />
        </div>
        <div className="p-4 w-[380px]">
          <h1 className="text-3xl text-white">Hitman III</h1>
          <p className="text-white mt-2.5">Rs. 1,299</p>
          <div className="mt-3 ml-auto flex justify-end items-center gap-4">
            <span
              className="text-white cursor-pointer"
              onClick={() => setWishlistState(!wishlistState)}
            >
              {wishlistState ? (
                <FaBookmark className="text-2xl" />
              ) : (
                <FaRegBookmark className="text-2xl" />
              )}
            </span>
            <div className="text-furfle bg-white rounded-md w-fit py-2 px-4 hover:bg-furfle outline outline-1 hover:text-white cursor-pointer">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="lg:container flex mx-auto flex-col">
      <h1 className="text-4xl font-bold text-center py-10 text-lavander">
        Special Offers
      </h1>
      <div className=" w-[fit] h-[250px] grid grid-cols-3 gap-4 mx-auto mb-24">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="my-32"></div>
    </div>
  );
};

export default SpecialOffers;
