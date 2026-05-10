type DashboardCardProps = {
  title: string;
  value: string;
};
export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 w-[300px]">

      <h2 className="text-2xl font-semibold mb-2">
        {title}
      </h2>

      <p className="text-5xl font-bold">
        {value}
      </p>

    </div>
  );
}