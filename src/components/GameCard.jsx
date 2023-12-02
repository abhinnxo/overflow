/* eslint-disable react/prop-types */
import { useState } from "react";
import GameImage from "../assets/hitman.jpg";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const GameCard = ({ tags, headerimage }) => {
  const [wishlistState, setWishlistState] = useState(false);

  return (
    <div className="gamecard carousel-item flex h-[380px] w-[900px] bg-furfle">
      <div className="w-[580px]">
        <img
          src={headerimage}
          alt="pic"
          className="w-[620px] h-[100%]"
          id="hero-car-game-img"
        />
      </div>
      <div className="p-4 w-[320px]">
        <h1 className="text-3xl text-white">Hitman III</h1>
        <div className="w-[248px] flex gap-2 flex-wrap mx-auto my-4">
          <img src={GameImage} width="120px" alt="game image" />
          <img src={GameImage} width="120px" alt="game image" />
          <img src={GameImage} width="120px" alt="game image" />
          <img src={GameImage} width="120px" alt="game image" />
        </div>

        <p className="mt-6 text-white flex items-center">
          <span className="text-furfle bg-white px-1 rounded">tags:</span>
          {tags.map((t, i) => (
            <span key={i} className="ml-1">
              {t + ","}
            </span>
          ))}
        </p>
        <p className="text-white mt-2.5">Rs. 1,299</p>
        <div className="mt-3 flex justify-left items-center gap-4">
          <div className="text-furfle bg-white rounded-md w-fit py-2 px-4 hover:bg-furfle outline outline-1 hover:text-white cursor-pointer">
            Add to cart
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default GameCard;
