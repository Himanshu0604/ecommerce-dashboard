import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ data }) => {
  return (
    <div>
      <Bar
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Revenue",
              data: data.map((data) => data.amount),
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
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
