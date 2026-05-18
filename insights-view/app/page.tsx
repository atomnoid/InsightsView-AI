"use client";
import { useState } from "react";
import DashboardCard from "../components/DashboardCard";


export default function Home() {
  // Track a simple counter and which sidebar tab is active.
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Analytics" | "AI Insights" | "Reports" | "Settings"
  >("Dashboard");
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
  const [prompt, setPrompt] = useState("");
  const tabs = ["Dashboard", "Analytics", "Reports", "Settings"] as const;
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
        <h1 className="text-3xl font-bold">
          {dashboardSections[activeTab].title}
        </h1>
        {activeTab === "Dashboard" && (
          <p className="text-zinc-400 mb-8">
            Overview of platform activity and metrics.
          </p>
        )}

        {activeTab === "Analytics" && (
          <p className="text-zinc-400 mb-8">
            AI-generated analytics and user insights.
          </p>
        )}

        {activeTab === "Reports" && (
          <p className="text-zinc-400 mb-8">
            Exported reports and business summaries.
          </p>
        )}

        {activeTab === "Settings" && (
          <p className="text-zinc-400 mb-8">
            Manage platform preferences and account settings.
          </p>
        )}

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
        <h1 className="text-3xl font-bold">
          {dashboardSections[activeTab].title}
        </h1>

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
