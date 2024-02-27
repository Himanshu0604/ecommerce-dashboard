import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ data }) => {
  console.log(data);
  return (
    <>
      <Line
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Visitors",
              data: data.map((data) => data.visitors),
              borderColor: "rgba(255, 99, 132)",
              fill: false,
            },
            {
              label: "Purchases",
              data: data.map((data) => data.purchases),
              borderColor: "rgba(54, 162, 235)",
              fill: false,
            },
          ],
        }}
      />
    </>
  );
};

export default LineChart;
