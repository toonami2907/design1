import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const customerList = [
    {name: 'Ana Black', email: 'ana@gmail.com', img: '/1.png'},
    {name: 'George Litz', email: 'GeorgeLitz@gmail.com', img: '/2.png'},
    {name: 'John Miller', email: 'JohnMiller@gmail.com', img: '/3.png'},
    {name: 'Jane Jonhson', email: 'JaneJonhson@gmail.com', img: '/4.png'},
    {name: 'Mezei Ágnes', email: 'MezeiÁgnes@gmail.com', img: '/5.png'},
    {name: 'Katona Beatrix', email: 'KatonaBeatrix@gmail.com', img: '/6.png'},
    {name: 'Halász Emese', email: 'HalászEmese@gmail.com', img: '/7.png'},
];

const Map = () => {
  return (
    <div className="w-full px-4 md:px-0 mb-5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Map Section */}
        <section className="w-full md:w-2/3 bg-white rounded-md">
          <Card className="shadow-none border-none">
            <CardHeader className="flex w-full justify-center border-b">
              <h1 className="font-InterBold text-lg">Customer Map</h1>
            </CardHeader>
            <CardContent>
              <div className="mt-5 overflow-hidden">
                <img 
                  src="/Mapsicle Map.png" 
                  alt="Customer Map" 
                  className="w-full h-auto md:h-[318px] object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Customer List Section */}
        <section className="w-full md:w-1/3 bg-white p-4 md:p-5 rounded-md">
          <div>
            <h1 className="text-[#081735] text-lg font-InterBold">Customers List</h1>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {customerList.map((data, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src={data.img} 
                    alt={data.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="font-InterBold text-sm md:text-[14px] leading-5 truncate">
                    {data.name}
                  </h1>
                  <p className="font-InterRegular text-sm md:text-[14px] leading-5 truncate text-gray-600">
                    {data.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Map;