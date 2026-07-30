function Stats() {
  const stats = [
    { number: "10K+", label: "Reports Analyzed" },
    { number: "98%", label: "AI Accuracy" },
    { number: "5K+", label: "Active Users" },
    { number: "24/7", label: "AI Assistance" },
  ];

  return (
    <section className="bg-blue-600 text-white py-16 px-16">
      <div className="grid grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold">{stat.number}</h2>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;