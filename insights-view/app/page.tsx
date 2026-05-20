import Sidebar from "../components/Sidebar";
import HeaderSection from "../components/HeaderSection";
import StatsSection from "../components/StatsSection";
import PromptBox from "../components/PromptBox";

"use client";

import { useState } from "react";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  // Main dashboard state
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [prompt, setPrompt] = useState("");

  // Active sidebar tab state
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Analytics" | "AI Insights" | "Reports" | "Settings"
  >("Dashboard");

  // Sidebar tabs
  const tabs = [
    "Dashboard",
    "Analytics",
    "AI Insights",
    "Reports",
    "Settings",
  ] as const;

  // Dynamic dashboard architecture
  const dashboardSections = {
    Dashboard: {
      title: "AI Dashboard",
      description: "Monitor platform insights and activity",

      cards: [
        {
          title: "Users",
          value: "12,450",
        },

        {
          title: "Revenue",
          value: "$8,420",
        },

        {
          title: "AI Reports",
          value: "1,240",
        },
      ],
    },

    Analytics: {
      title: "Analytics Center",
      description: "Track engagement and growth metrics",

      cards: [
        {
          title: "Engagement",
          value: "87%",
        },

        {
          title: "Conversion",
          value: "12.4%",
        },

        {
          title: "Retention",
          value: "74%",
        },
      ],
    },

    "AI Insights": {
      title: "AI Insights",
      description: "Analyze AI-generated platform intelligence",

      cards: [
        {
          title: "Prompts",
          value: "8,240",
        },

        {
          title: "Tokens Used",
          value: "1.2M",
        },

        {
          title: "Accuracy",
          value: "92%",
        },
      ],
    },

    Reports: {
      title: "Reports Center",
      description: "Exported reports and business summaries",

      cards: [
        {
          title: "Monthly Report",
          value: "42",
        },

        {
          title: "Exported",
          value: "18",
        },

        {
          title: "Summary",
          value: "Active",
        },
      ],
    },

    Settings: {
      title: "Platform Settings",
      description: "Manage dashboard preferences",

      cards: [
        {
          title: "Theme",
          value: "Dark Mode",
        },

        {
          title: "Users",
          value: "Admin",
        },

        {
          title: "Plan",
          value: "Pro",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">
        <h1 className="text-3xl font-bold">
          InsightsView AI
        </h1>

        <p className="text-zinc-400 mt-2 mb-8">
          Modern AI analytics dashboard
        </p>

        {/* Navigation */}
        <div className="space-y-4">
          {tabs.map((tab) => (
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
        {/* Dynamic Heading */}
        <h1 className="text-4xl font-bold">
          {dashboardSections[activeTab].title}
        </h1>

        {/* Dynamic Description */}
        <p className="text-zinc-400 mt-3">
          {dashboardSections[activeTab].description}
        </p>

        {/* Dynamic Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {dashboardSections[activeTab].cards.map((card) => (
            <DashboardCard
              key={card.title}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>

        {/* Counter Section */}
        <div className="mt-12">
          <p className="text-3xl font-bold mb-4">
            Count: {count}
          </p>

          <div className="flex items-center">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Increase
            </button>

            <button
              onClick={() => setShowMessage(!showMessage)}
              className="bg-zinc-800 px-6 py-3 rounded-xl ml-4"
            >
              Toggle Message
            </button>
          </div>

          {showMessage && (
            <p className="text-green-400 mt-4 text-xl">
              AI Dashboard Active 🚀
            </p>
          )}
        </div>

        {/* AI Prompt Input */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            AI Prompt
          </h2>

          <input
            type="text"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white transition-all"
          />

          <p className="mt-4 text-zinc-400">
            Current Prompt: {prompt}
          </p>
        </div>
      </div>
    </div>
  );
}