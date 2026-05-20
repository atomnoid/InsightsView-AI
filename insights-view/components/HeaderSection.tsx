type HeaderSectionProps = {
  title: string;
  description: string;
};

export default function HeaderSection({
  title,
  description,
}: HeaderSectionProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="text-zinc-400 mt-3">
        {description}
      </p>
    </div>
  );
}