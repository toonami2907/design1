import React from "react";

const Data = [
  {
    name: "BBQ Rib Dinner",
    img: "/img1.png",
    price: "$90.21",
    description: "456 Served",
  },
  {
    name: "Chicken & Ribs Combo",
    img: "/img2.png",
    price: "$69.21",
    description: "456 Served",
  },
  {
    name: "Fried Chicken Dinne",
    img: "/img3.png",
    price: "$89.21",
    description: "456 Served",
  },
  {
    name: "Dark & Stormy",
    img: "/img4.png",
    price: "$88.21",
    description: "456 Served",
  },
];
const Category2 = () => {
  return (
    <div>
      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Data.map((data, idx) => (
          <div key={idx} className="h-[234px] rounded-xl relative">
            <img
              src={data.img}
              alt={data.name}
              className="h-full w-full object-cover rounded-xl object-center"
            />
            <div className="absolute inset-x-0 bottom-3 flex justify-center">
              <div className="w-[90%] max-w-[226px] h-[74px] p-4 drop-shadow-[0_4px_6px_rgba(30,41,59,0.06)] bg-white/60 border border-white rounded-[6px] backdrop-blur-xl flex justify-between items-center">
                <div className="space-y-2">
                  <h1 className="text-sm line-clamp-1 font-InterSemiBold">
                    {data.name}
                  </h1>
                  <p className="text-xs font-InterRegular text-[#64748B]">
                    {data.description}
                  </p>
                </div>
                <div>
                  <h1 className="text-sm font-InterSemiBold">{data.price}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Category2;