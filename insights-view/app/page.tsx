"use client";

import Sidebar from "../components/Sidebar";
import HeaderSection from "../components/HeaderSection";
import StatsSection from "../components/StatsSection";
import PromptBox from "../components/PromptBox";
import { useState, useEffect } from "react";

export default function Home() {
  // Main dashboard state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setPosts(data);
    });
  }, []);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setPosts(data);
    });
  }, []);
  const [showMessage, setShowMessage] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setPosts(data);
    });
  }, []);
  const [prompt, setPrompt] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setPosts(data);
    });
  }, []);

  // Active sidebar tab state
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Analytics" | "AI Insights" | "Reports" | "Settings"
  >("Dashboard");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("InsightsView AI Loaded");fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setPosts(data);
    });
  }, []);

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
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        <HeaderSection
          title={dashboardSections[activeTab].title}
          description={dashboardSections[activeTab].description}
        />

        <StatsSection cards={dashboardSections[activeTab].cards} />

        {/* Counter Section */}
        <div className="mt-12">
          <p className="text-3xl font-bold mb-4">Count: {count}</p>

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

        <PromptBox prompt={prompt} setPrompt={setPrompt} />
      </div>
    </div>
  );
}
