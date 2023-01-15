import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default class BitcoinPriceChart extends React.Component {
  render() {
    const { coinChartData } = this.props;

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        x: {
          display: false,
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
      tension: 0.5,
    };

    const data = {
      labels: coinChartData
        .map((item) => new Date(item[0]).toString().slice(4, 15))
        .slice(0, -1),
      datasets: [
        {
          data: coinChartData.map((item) => item[1]),
          borderColor: "hsl(142, 100%, 38%)",

          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgba(153, 255, 153, .25)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            return gradient;
          },
          label: "Price",
          pointRadius: 0,
          pointHoverRadius: 10,
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    return <Line options={options} data={data} height="60rem" />;
  }
}
