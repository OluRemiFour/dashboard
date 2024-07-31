import React from "react";

const ExchangeRateTable = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Date</th>
          <th>Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeRateTable;
