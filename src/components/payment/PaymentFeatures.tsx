export const PaymentFeatures = () => {
    const features = [
      { icon: "🎯", text: "Generate more leads" },
      { icon: "💬", text: "Highly engaged" },
      { icon: "💰", text: "Charge your community" },
      { icon: "🛠", text: "Simple to setup" },
      { icon: "👥", text: "Thousands of users" },
      { icon: "📈", text: "Grow your network" },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.text}
            className="flex items-center gap-2 bg-[#00291F]/50 rounded-full px-4 py-2"
          >
            <span>{feature.icon}</span>
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    );
  };