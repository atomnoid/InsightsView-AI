import DashboardCard from "./DashboardCard";

type Card = {
  title: string;
  value: string;
};

type StatsSectionProps = {
  cards: Card[];
};

export default function StatsSection({
  cards,
}: StatsSectionProps) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          value={card.value}
        />
      ))}
    </div>
  );
}