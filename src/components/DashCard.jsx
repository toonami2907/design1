/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const DashCard = () => {
    const dashboardData = [
        {
          id: 1,
          icon: "/Paper.svg",
          title: "Total Menu",
          value: "345",
        },
        {
          id: 2,
          icon: "/Activity.svg",
          title: "Total Revenue",
          value: "$37,193.00",
          
        },
        {
          id: 3,
          icon: "/3 User.svg",
          title: "Total Customers",
          value: "1349",
        },
        {
          id: 4,
          icon: "/Bag.svg",
          title: "Total Orders",
          value: "3,500",
        },
      ];
  return (
    <div className="grid gap-4 md:gap-6 xl:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {dashboardData.map((item) => (
      <Card
        key={item.id}
        className="w-full h-full md:max-w-[254px] rounded-lg border border-[#0C1A240A] shadow-lg max-h-[182px]  bg-[#FFFFFFBF]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            <div className="h-12 w-12  bg-white flex rounded-2xl items-center justify-center">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="h-6 w-6 object-contain"
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#1E293B]">
              {item.title}
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-[#1E293B]">{item.value}</h2>
              <span className="text-sm  text-green-600">
                {item.change}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {item.description}
            </p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

export default DashCard