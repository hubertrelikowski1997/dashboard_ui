"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { events } from "@/lib/utils";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} locale="en-EN" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map(({ id, title, time, description }) => (
          <div
            key={id}
            className="p-5 rounded-md border-2 border-t-4 border-gray-100 odd:border-t-sky even:border-t-yellow"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{title}</h1>
              <span className="text-gray-300 text-xs">{time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
