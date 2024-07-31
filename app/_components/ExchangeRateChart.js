import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ExchangeRateChart = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setChartWidth(500);
        setChartHeight(200);
      } else if (window.innerWidth <= 1024) {
        setChartWidth(500);
        setChartHeight(300);
      } else {
        setChartWidth(800);
        setChartHeight(400);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
    </BarChart>
  );
};

export default ExchangeRateChart;
