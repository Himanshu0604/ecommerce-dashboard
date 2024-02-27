import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ data }) => {
  return (
    <div>
      <Bar
        id="bar-chart"
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Visitors",
              data: data.map((data) => data.visitors),
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
              ],
              hoverBorderColor: "rgba(255, 255, 255, 1)",
              hoverBorderWidth: 2,
            },
            {
              label: "Purchases",
              data: data.map((data) => data.purchases),
              backgroundColor: [
                "rgba(255, 99, 132, 0.4)",
                "rgba(255, 159, 64, 0.4)",
                "rgba(255, 205, 86, 0.4)",
                "rgba(75, 192, 192, 0.4)",
                "rgba(54, 162, 235, 0.4)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
              ],
              hoverBorderColor: "rgba(255, 255, 255, 1)",
              hoverBorderWidth: 2,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "User Activity",
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
