import { useEffect, useState } from "react";

const useExchangeRate = (
  crypto = "bitcoin",
  fiat = "usd",
  startDate,
  endDate
) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fromDate = Math.floor(new Date(startDate).getTime() / 1000);
      const toDate = Math.floor(new Date(endDate).getTime() / 1000);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart/range?vs_currency=${fiat}&from=${fromDate}&to=${toDate}`
        );
        const result = await response.json();
        const formattedData = result.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching exchange rate data:", error);
      }
    };

    if (startDate && endDate) {
      fetchData();
    }
  }, [crypto, fiat, startDate, endDate]);

  return data;
};

export default useExchangeRate;
