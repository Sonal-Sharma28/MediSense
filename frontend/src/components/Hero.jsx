import hero from "../assets/hero.svg";

function Hero() {
  return (
    <section className="bg-[#F8F4E8]">

      <div className="max-w-7xl mx-auto px-10 py-24 flex items-center justify-between gap-10">

        {/* LEFT */}

        <div className="max-w-xl">

          <p className="text-blue-600 font-semibold tracking-widest uppercase">
            AI Powered Healthcare
          </p>

          <h1 className="mt-4 text-7xl font-extrabold leading-tight text-gray-900">

            Understand

            <br />

            Your

            <span className="text-blue-600">

              {" "}Medical Reports

            </span>

            <br />

            with AI.

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            Upload your reports and receive intelligent summaries,
            abnormal value detection, medical explanations,
            health trends and personalized insights within seconds.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">

              Upload Report

            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition">

              Learn More

            </button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>

              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="text-gray-600">
                Reports
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                98%
              </h2>

              <p className="text-gray-600">
                Accuracy
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                24/7
              </h2>

              <p className="text-gray-600">
                AI Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4">

            🤖 AI Summary

          </div>

          <div className="absolute top-36 -right-8 bg-blue-600 text-white rounded-2xl shadow-xl p-4">

            📊 Abnormal Values

          </div>

          <div className="absolute bottom-5 left-0 bg-white rounded-2xl shadow-xl p-4">

            📈 Health Timeline

          </div>

          <img
            src={hero}
            alt="Medical"
            className="w-[620px]"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;