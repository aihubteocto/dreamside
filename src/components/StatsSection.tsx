const stats = [
  { value: "400+", label: "Projects completed" },
  { value: "600%", label: "Return on investment" },
  { value: "10k", label: "Global downloads" },
  { value: "200+", label: "5-star reviews" },
];

export const StatsSection = () => {
  return (
    <div className="bg-defbackground rounded-3xl border-primary border-[4px] p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <h1 className=" font-semibold text-display-xl mb-1">{stat.value}</h1>
          <div className="text-lg semibold text-white ">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};