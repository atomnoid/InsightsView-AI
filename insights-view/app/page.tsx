import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-zinc-900 p-6 border-r border-zinc-800">

        <h1 className="text-2xl font-bold mb-10">
          Insights View
        </h1>

        <div className="space-y-4">
          <p className="text-zinc-300 cursor-pointer">
            Dashboard
          </p>

          <p className="text-zinc-300 cursor-pointer">
            Analytics
          </p>

          <p className="text-zinc-300 cursor-pointer">
            Reports
          </p>

          <p className="text-zinc-300 cursor-pointer">
            Settings
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="flex gap-6">

          <DashboardCard
            title="Total Users"
            value="1,284"
          />

          <DashboardCard
            title="Revenue"
            value="$12K"
          />

          <DashboardCard
            title="AI Reports"
            value="342"
          />

        </div>

      </div>

    </div>
  );
}