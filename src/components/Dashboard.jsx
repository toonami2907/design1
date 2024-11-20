/* eslint-disable no-unused-vars */
import React from "react";

import DashCard from "./DashCard";
import DashGraph from "./DashGraph";

import TestingGraph from "./TestingGraph";
import Map from "./Map";
import Menu from "./Menu";



const Dashboard = () => {
 

  return (
    <div className="w-full space-y-4">
      <DashCard/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <DashGraph/>
        <TestingGraph/>
      </div>
      <Map/>
      <Menu/>
    </div>
  );
};

export default Dashboard;