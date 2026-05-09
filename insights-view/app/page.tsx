export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Insights View AI
      </h1>

      <div className="flex gap-6">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">
            Total Users
          </h2>

          <p className="text-5xl font-bold">
            1,284
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">
            Revenue
          </h2>

          <p className="text-5xl font-bold">
            $12K
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">
            AI Reports
          </h2>

          <p className="text-5xl font-bold">
            342
          </p>
        </div>

      </div>

    </div>
  );
}