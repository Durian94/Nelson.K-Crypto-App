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
import { shortHandCurrency } from "../../utilities/formatMoney/functions";
import {
  ChartContainer,
  ChartHeader,
} from "../BitcoinChart/BitcoinChart.styles";
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

export default function BitcoinPriceChart(props: any) {
  const { chartData, currencySymbol } = props;

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
    tension: 0.5,
  };

  const data = {
    labels: chartData.prices
      .map((item: number[]) => new Date(item[0]).toString().slice(4, 10))
      .slice(0, -1),
    datasets: [
      {
        data: chartData.prices.map((item: number[]) => item[1]).slice(0, -1),
        borderColor: "hsl(142, 100%, 54%)",

        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(153, 255, 153, .35)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        label: "Bitcoin Price",
        pointRadius: 2,
        pointHoverRadius: 10,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  const currentPrice = chartData.prices[chartData.prices.length - 1][1];
  const todayInMiliseconds = chartData.total_volumes.slice(14);
  const getDate = new Date(
    parseFloat(todayInMiliseconds.map((item: number[]) => item[0]))
  );

  return (
    <ChartContainer>
      <ChartHeader>
        <p>BTC Price</p>
        <h3>
          {currencySymbol}
          {shortHandCurrency(currentPrice)}
        </h3>
        <p>{getDate.toString().slice(4, 16)}</p>
      </ChartHeader>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}
