function Features() {
  const features = [
    {
      title: "AI Report Summary",
      description:
        "Get an easy-to-understand summary of your medical report in seconds.",
      icon: "🤖",
    },
    {
      title: "Abnormal Value Detection",
      description:
        "Automatically identify abnormal values and highlight them clearly.",
      icon: "📊",
    },
    {
      title: "Health Timeline",
      description:
        "Track your health reports over time with interactive charts.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-white py-20 px-16">
      <h2 className="text-4xl font-bold text-center mb-14">
        Why Choose <span className="text-blue-600">MediSense?</span>
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-5xl mb-5">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;