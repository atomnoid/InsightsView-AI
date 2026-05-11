"use client";
import { useState } from "react";
import DashboardCard from "../components/DashboardCard";

const stats = [
  {
    title: "Total Users",
    value: "1,284",
  },

  {
    title: "Revenue",
    value: "$12K",
  },

  {
    title: "AI Reports",
    value: "342",
  },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  <button
    onClick={() => setShowMessage(!showMessage)}
    className="bg-zinc-800 px-6 py-3 rounded-xl mt-6"
  >
    Toggle Message
  </button>;
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">
        <h1 className="text-2xl font-bold mb-10">Insights View</h1>

        <div className="space-y-4">
          <p className="text-zinc-300 cursor-pointer">Dashboard</p>

          <p className="text-zinc-300 cursor-pointer">Analytics</p>

          <p className="text-zinc-300 cursor-pointer">Reports</p>

          <p className="text-zinc-300 cursor-pointer">Settings</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        <div className="flex gap-6">
          {stats.map((item) => (
            <DashboardCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        <div className="mt-10">
          <p className="text-3xl font-bold mb-4">Count: {count}</p>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
