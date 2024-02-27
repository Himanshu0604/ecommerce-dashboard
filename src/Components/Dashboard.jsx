import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import sourceData from "../Data/sourceData.json";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Chart as ChartJS, defaults } from "chart.js/auto";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [revenueData, setRevenueData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [salesData, setSalesData] = useState([]);

  function fetchData() {
    setLoading(true);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockData = sourceData;
        setLoading(false);
        setData(mockData);
        resolve(mockData);
      }, 1000);
    });
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        console.log("Fetched data:", data);
        setRevenueData(data.revenue);
        setUserActivityData(data.userActivity);
        setSalesData(data.sales);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "center";
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = "black";
  defaults.aspectRatio = 1;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <LineChart data={revenueData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <BarChart data={userActivityData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <PieChart data={salesData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
