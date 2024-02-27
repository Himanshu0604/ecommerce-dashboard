import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

const LineChart = ({ data }) => {
  return (
    <>
      <Line
        id="line-chart"
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Revenue",
              data: data.map((data) => data.amount),
              borderColor: "rgba(255, 99, 132)",
              fill: false,
              tension: 0.1,
              hoverBackgroundColor: "rgba(0, 0, 0, 1)",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue",
            },
          },
        }}
      />
    </>
  );
};

export default LineChart;
