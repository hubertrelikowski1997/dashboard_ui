"use client";
import { dataCountChart } from "@/lib/utils";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = () => {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={32}
            data={dataCountChart}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          width={35}
          height={35}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="people"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div>
          <div className="bg-sky rounded-full w-5 h-5" />
          <p className="font-bold mt-1 mb-1">1,234</p>
          <p className="text-xs text-gray-400">Boys(55%)</p>
        </div>
        <div>
          <div className="bg-yellow rounded-full w-5 h-5" />
          <p className="font-bold mt-1 mb-1">1,234</p>
          <p className="text-xs text-gray-400">Girls(45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
