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

  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
};

export default CoinGeckoChart;
