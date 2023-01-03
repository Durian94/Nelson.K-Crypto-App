import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { shortHandCurrency } from "../../utilities/formatMoney/formatMoney";
import {
  ChartContainer,
  ChartHeader,
} from "../BitcoinChart/BitcoinChart.styles";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default class BitcoinVolumeChart extends React.Component {
  render() {
    const { chartData } = this.props;

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
          display: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            font: {
              size: 8,
            },
          },
        },
      },
    };

    const data = {
      labels: chartData.total_volumes.map((item) =>
        new Date(item[0]).toString().slice(4, 10)
      ),
      datasets: [
        {
          label: "BTC Volume",
          data: chartData.total_volumes.map((item) => item[1]),
          backgroundColor: "hsl(215, 79%, 51%)",
        },
      ],
    };

    const currentVolume = data.datasets[0].data.slice(15);
    const todayInMiliseconds = chartData.total_volumes.slice(15);
    const getDate = new Date(
      parseFloat(todayInMiliseconds.map((item) => item[0]))
    );

    return (
      <ChartContainer>
        <ChartHeader>
          <p>BTC Volume 24h</p>
          <h3>{shortHandCurrency(currentVolume)}</h3>
          <p>{getDate.toString().slice(4, 16)}</p>
        </ChartHeader>
        <Bar options={options} data={data} />
      </ChartContainer>
    );
  }
}
