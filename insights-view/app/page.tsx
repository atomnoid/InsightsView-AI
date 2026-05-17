"use client";
import { useState } from "react";
import DashboardCard from "../components/DashboardCard";

// Basic dashboard values shown in cards on the main page.
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
  // Track a simple counter and which sidebar tab is active.
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [prompt, setPrompt] = useState("");
  // This button is meant to flip the message toggle state.
  <button
    onClick={() => setShowMessage(!showMessage)}
    className="bg-zinc-800 px-6 py-3 rounded-xl mt-6"
  >
    Toggle Message
  </button>;

  {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    showMessage && (
      <p className="text-green-400 mt-4 text-xl">AI Dashboard Active 🚀</p>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">
        <h1 className="text-2xl font-bold mb-10">Insights View</h1>

        {/* Navigation links for each dashboard section. */}
        <div className="space-y-4">
          {["Dashboard", "Analytics", "Reports", "Settings"].map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer p-3 rounded-xl transition-all ${
                activeTab === tab
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">{activeTab}</h1>

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

          {/* Simple counter button for a bit of interactivity. */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Increase
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">AI Prompt</h2>

        <input
          type="text"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none"
        />
        <p className="mt-4 text-zinc-400">Current Prompt: {prompt}</p>
      </div>
    </div>
  );
}
