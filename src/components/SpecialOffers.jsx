import React from "react";

const SpecialOffers = () => {
  return (
    <div className="lg:container flex mx-auto flex-col">
      <h1 className="text-4xl font-bold text-center py-10 text-lavander">
        Special Offers
      </h1>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 w-[fit] h-[250px] mx-auto mb-24">
        <div className="w-[250px] bg-green-600">
          <div className="h-[200px] bg-red-600 p-2">
            <p className="text-white text-lg">-35%</p>
          </div>
          <div className="h-[100px] bg-blue-500 py-2 px-4">
            <h1 className="text-2xl text-white text-center">Hitman III</h1>
          </div>
        </div>
        <div className="w-[250px] bg-green-600">b</div>
        <div className="w-[250px] bg-green-600">c</div>
      </div>
    </div>
  );
};

export default SpecialOffers;
