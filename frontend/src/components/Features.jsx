function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Report Summary",
      description:
        "Understand your medical reports instantly with AI-generated summaries in simple language.",
    },
    {
      icon: "📊",
      title: "Abnormal Value Detection",
      description:
        "Automatically identify abnormal test values and highlight them clearly.",
    },
    {
      icon: "📈",
      title: "Health Timeline",
      description:
        "Compare previous reports and visualize your health trends over time.",
    },
    {
      icon: "💬",
      title: "AI Medical Chat",
      description:
        "Ask questions about your uploaded reports and receive intelligent explanations.",
    },
    {
      icon: "📁",
      title: "Secure Report Storage",
      description:
        "Access all your reports securely from one dashboard anytime.",
    },
    {
      icon: "🩺",
      title: "Doctor Friendly",
      description:
        "Generate clean summaries that are easy to share during consultations.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center text-gray-900">

          Why Choose
          <span className="text-blue-600"> MediSense?</span>

        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">

          AI-powered healthcare built to make medical reports simple.

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#F8F4E8] p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {feature.title}

              </h3>

              <p className="text-gray-600 leading-8">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;