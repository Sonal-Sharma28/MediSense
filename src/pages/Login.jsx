function Login() {
  return (
    <div className="min-h-screen bg-[#F8F4E8] flex items-center justify-center">

      <div className="bg-white w-[430px] rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <div className="text-5xl mb-3">🩺</div>

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue to MediSense
          </p>

        </div>

        <div className="mt-10 space-y-5">

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

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>

        </div>

        <p className="text-center mt-8 text-gray-600">

          Don't have an account?

          <span className="text-blue-600 font-semibold cursor-pointer">

            {" "}Register

          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;