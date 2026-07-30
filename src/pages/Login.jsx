import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#F8F4E8] flex">

      {/* Left */}
      <div className="w-1/2 hidden lg:flex flex-col justify-center px-20">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome
          <br />
          Back 👋
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-8">
          Continue your healthcare journey with AI-powered medical report
          analysis and insights.
        </p>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center">

        <div className="bg-white w-[430px] rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Login
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Sign in to your account
          </p>

          <div className="mt-10 space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
              Login
            </button>

          </div>

          <p className="text-center mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;