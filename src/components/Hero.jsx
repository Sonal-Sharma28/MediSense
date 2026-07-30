import hero from "../assets/hero.svg";

function Hero() {
  return (
    <section className="flex items-center justify-between px-16 py-20">

      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Understand Your
          <span className="text-blue-600"> Medical Reports </span>
          with AI
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Upload your medical reports and get AI-powered summaries,
          abnormal value detection, and easy-to-understand health insights
          in seconds.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Upload Report
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right */}
      <div>
        <img
          src={hero}
          alt="Medical Illustration"
          className="w-[500px]"
        />
      </div>

    </section>
  );
}

export default Hero;