import gameImage from "../assets/Hitman.jpg";

const GameCard = () => {
  return (
    <div className="gamecard carousel-item flex h-[380px] w-[900px] bg-furfle">
      <div id="hero-car-game-img" className="w-[550px] bg-blue-700"></div>
      <div className="p-4">
        <h1 className="text-3xl text-white">Hitman III</h1>
        <div className="w-[290px] flex gap-2 flex-wrap my-4">
          <img src={gameImage} width="140px" alt="game image" />
          <img src={gameImage} width="140px" alt="game image" />
          <img src={gameImage} width="140px" alt="game image" />
          <img src={gameImage} width="140px" alt="game image" />
        </div>
        <p className="text-white">tags: Action, RPG, Adventure</p>
        <p className="text-white">Rs. 1,299</p>
      </div>
    </div>
  );
};

export default GameCard;
