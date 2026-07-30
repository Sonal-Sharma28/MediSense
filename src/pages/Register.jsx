import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-[#F8F4E8] flex">

      {/* Left Side */}
      <div className="w-1/2 hidden lg:flex flex-col justify-center px-20">

        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Join
          <br />
          MediSense 🚀
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-8">
          Create your account and securely manage your medical reports
          with AI-powered healthcare insights.
        </p>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center">

        <div className="bg-white w-[450px] rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Sign up to get started
          </p>

          <div className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
              Create Account
            </button>

          </div>

          <p className="text-center mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;