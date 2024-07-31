"use client";
import CoinGeckoChart from "@/app/_components/CoinGeckoChart";
import DateRangePicker from "@/app/_components/DateRangePicker";
import ExchangeRateChart from "@/app/_components/ExchangeRateChart";
import ExchangeRateTable from "@/app/_components/ExchangeRateTable";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import useExchangeRate from "../hooks/useExchangeRate";
import SignInPrompt from "../_components/SignInPrompt";

const Dashboard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const data = useExchangeRate("bitcoin", "usd", startDate, endDate);

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const { user } = useUser();

  return (
    <>
      {user ? (
        <div className="m-20">
          <div className="justify-center items-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </div>

          <div className="my-10">
            <h2 className="font-bold">Bitcoin to USD Exchange Rate</h2>
            <p>
              Real-time exchange rate data for Bitcoin to USD over the past 30
              days.
            </p>

            {/* CoinGecko Chart Component */}
            <CoinGeckoChart />
          </div>

          <div className="my-10">
            <h2 className="font-bold">Cryptocurrency Exchange Rate</h2>
            <p>Real-time exchange rate data for Bitcoin to USD.</p>
            <p>Select a start and end date</p>

            {/* Date Range Picker */}
            <DateRangePicker onDateChange={handleDateChange} />

            {/* Bar Chart for the Exchange Rate Data */}
            <div className="my-10">
              <ExchangeRateChart data={data} />
            </div>

            {/* Table to display the Exchange Rate Data */}
            <div className="my-10">
              <ExchangeRateTable data={data} />
            </div>
          </div>
        </div>
      ) : (
        <SignInPrompt />
      )}
    </>
  );
};

export default Dashboard;
