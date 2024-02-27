import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ data }) => {
  return (
    <>
      <Doughnut
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Sales",
              data: data.map((data) => data.amount),
            },
          ],
        }}
      />
    </>
  );
};

export default PieChart;
