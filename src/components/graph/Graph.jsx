import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "00hr",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02hr",
    uv: 100,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "04hr",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "06hr",
    uv: 300,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "08hr",
    uv: 400,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "10hr",
    uv: 500,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "12hr",
    uv: 600,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "14hr",
    uv: 400,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "16hr",
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "18hr",
    uv: 400,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "20hr",
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "22hr",
    uv: 400,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24hr",
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
];

const Graph = () => {
  return (
    <div className="container">
      <AreaChart
        width={580}
        height={280}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#A1054A" fill="#A1054A" />
      </AreaChart>
    </div>
  );
};

export default Graph;
