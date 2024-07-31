import React, { useState } from "react";
const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    onDateChange(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    onDateChange(startDate, e.target.value);
  };

  return (
    <div className="date-range-picker">
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <input type="date" value={endDate} onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRangePicker;
