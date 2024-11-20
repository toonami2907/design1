import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllCategories from "./AllCategories";
import Category2 from "./Category2";

const navtabs = [
  { name: "All Category" },
  { name: "Breakfast" },
  { name: "Lunch" },
  { name: "Dinner" },
];

const BreakfastMenu = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mt-4">
    <Card className="max-w-full">
      <CardHeader>
        <CardTitle className="text-base">Morning Special</CardTitle>
        <CardDescription>$15.99</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Special breakfast layout and content
        </p>
      </CardContent>
    </Card>
  </div>
);

const LunchMenu = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-4">
    <Card className="max-w-full">
      <CardHeader>
        <CardTitle className="text-base">Lunch Deal</CardTitle>
        <CardDescription>$12.99</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Different lunch layout and content
        </p>
      </CardContent>
    </Card>
  </div>
);

const Menu = () => {
  return (
    <div className="w-full ">
      <Card className="rounded-md mx-auto border-none shadow-none w-full">
        <CardHeader className="px-0 mb-0 pb-0">
          <CardTitle className="text-[#081735] font-InterBold text-base sm:text-lg px-2 sm:px-5">
            Menu
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end items-end p-2 sm:p-6">
          <Tabs defaultValue="All Category" className="w-full">
            <TabsList className="bg-inherit flex justify-start sm:justify-end items-end border-b rounded-none shadow-none overflow-x-auto">
              {navtabs.map((tab, idx) => (
                <TabsTrigger
                  key={idx}
                  value={tab.name}
                  className="relative shadow-none border-none data-[state=active]:shadow-none data-[state=active]:text-[#6C5DD3] font-InterSemiBold text-[13px] sm:text-[15px] leading-[18px] sm:leading-[22px] whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-transparent data-[state=active]:after:bg-[#6C5DD3]"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {navtabs.map((tab, idx) => (
              <TabsContent key={idx} value={tab.name}>
                {tab.name === "All Category" && (
                  <div className="space-y-5 my-5">
                    <AllCategories />
                    <Category2 />
                  </div>
                )}
                {tab.name === "Breakfast" && <BreakfastMenu />}
                {tab.name === "Lunch" && <LunchMenu />}
                {tab.name === "Dinner" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Dinner specific layout */}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Menu;
