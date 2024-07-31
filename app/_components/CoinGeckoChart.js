"use client";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CoinGeckoChart = () => {
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(400);

  const [data, setData] = useState([]);
  const coinId = "bitcoin";
  const vsCurrency = "usd";
  const days = "30";

  const baseURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const result = await response.json();

        const transformedData = result.prices.map(([timestamp, price]) => ({
          timestamp: new Date(timestamp).toLocaleDateString(),
          price,
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [baseURL]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setChartWidth(500);
        setChartHeight(200);
      } else if (window.innerWidth <= 1024) {
        setChartWidth(500);
        setChartHeight(300);
      } else {
        setChartHeight(400);
        setChartWidth(800);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
    handleResize();
  }, []);

  return (
    <LineChart width={chartWidth} height={chartHeight} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
};

export default CoinGeckoChart;
