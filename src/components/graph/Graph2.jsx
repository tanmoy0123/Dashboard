import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Active", 389],
  ["Pending", 125],
  ["Refunded", 234],
  ["Cancelled", 235],
];

const Graph2 = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height="50%"
        className="bg-black"
      />
    </div>
  );
};

export default Graph2;
