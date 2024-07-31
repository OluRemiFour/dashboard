"use client";
import CoinGeckoChart from "@/app/_components/CoinGeckoChart";
import DateRangePicker from "@/app/_components/DateRangePicker";
import ExchangeRateChart from "@/app/_components/ExchangeRateChart";
import ExchangeRateTable from "@/app/_components/ExchangeRateTable";
import { useUser } from "@clerk/nextjs";
import { useContext, useState } from "react";
import useExchangeRate from "../hooks/useExchangeRate";
import SignInPrompt from "../_components/SignInPrompt";
import { DarkModeContext } from "../context/DarkModeContext";

const Dashboard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const data = useExchangeRate("bitcoin", "usd", startDate, endDate);

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const { user } = useUser();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {user ? (
        <div className="md:m-20">
          {/* <div className="justify-center items-center"> */}
          <div
            className={`justify-center items-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </div>

          <div
            className={`font-bold my-10 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <h2 className="font-bold">Bitcoin to USD Exchange Rate</h2>
            <p className="mb-10">
              Real-time exchange rate data for Bitcoin to USD over the past 30
              days.
            </p>

            {/* CoinGecko Chart Component */}
            <CoinGeckoChart />
          </div>

          <div className="my-10">
            <h2
              className={`font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Cryptocurrency Exchange Rate
            </h2>
            <p className={` ${isDarkMode ? "text-white" : "text-black"}`}>
              Real-time exchange rate data for Bitcoin to USD.
            </p>
            <p className={` ${isDarkMode ? "text-white" : "text-black"}`}>
              Select a start and end date
            </p>

            {/* Date Range Picker */}
            <DateRangePicker onDateChange={handleDateChange} />

            {/* Bar Chart for the Exchange Rate Data */}
            <div className="my-10">
              <ExchangeRateChart data={data} />
            </div>

            {/* Table to display the Exchange Rate Data */}
            <div
              className={`my-10 ${isDarkMode ? "text-white" : "text-black"}`}
            >
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
