import React from "react";
import LineChart from "./LineChart";
import sourceData from "../Data/sourceData.json";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">User Activity</h2>
          <LineChart data={sourceData.userActivity} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Revenue Analysis</h2>
          <BarChart data={sourceData.revenue} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Sales Trends</h2>
          <PieChart data={sourceData.sales} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
