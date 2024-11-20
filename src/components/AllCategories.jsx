import React from "react";

const AllCategories = () => {
  return (
    <div className="w-full max-w-[1115px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-y-0 lg:space-x-5 [&_div]:rounded-xlunded-lg">
        <div id="top-grid" className="lg:col-span-2 relative h-[234px]">
          <img
            src="/Background.png"
            alt=""
            className="w-full h-full object-cover object-center rounded-xl"
          />
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <div className="w-[90%] max-w-[626px] h-[73px] p-4 drop-shadow-[0_4px_6px_rgba(30,41,59,0.06)] bg-white/60 border border-white rounded-[6px] backdrop-blur-xl flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-sm font-bold">Surf & Turf Gift Basket</h1>
                <p className="text-xs font-medium text-[#64748B]">456 Served</p>
              </div>
              <div>
                <h1 className="text-sm font-bold">$89.24</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="down-top-grid" className="lg:col-span-1 w-full relative h-[234px]">
          <img
            src="/img-8 1.png"
            alt=""
            className="w-full h-full object-cover object-center rounded-xl"
          />
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <div className="w-[90%] max-w-[320px] h-[73px] p-4 drop-shadow-[0_4px_6px_rgba(30,41,59,0.06)] bg-white/60 border border-white rounded-[6px] backdrop-blur-xl flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-sm font-bold">Shaking Beef Tri-Tip</h1>
                <p className="text-xs  text-[#64748B]">456 Served</p>
              </div>
              <div>
                <h1 className="text-sm font-bold">$69.46</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;