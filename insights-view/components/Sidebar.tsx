type SidebarProps = {
  tabs: readonly string[];
  activeTab: string;
  setActiveTab: (tab: any) => void;
};

export default function Sidebar({
  tabs,
  activeTab,
  setActiveTab,
}: SidebarProps) {
  return (
    <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">
      <h1 className="text-3xl font-bold">
        InsightsView AI
      </h1>

      <p className="text-zinc-400 mt-2 mb-8">
        Modern AI analytics dashboard
      </p>

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
  );
}