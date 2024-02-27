import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ data }) => {
  return (
    <>
      <Doughnut
        id="pie-chart"
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Sales",
              data: data.map((data) => data.amount),
              hoverOffset: 30,
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
              ],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Sales",
            },
          },
        }}
      />
    </>
  );
};

export default PieChart;
