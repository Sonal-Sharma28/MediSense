function Navbar() {
  return (
    <nav className="bg-[#F8F4E8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-md">
            🩺
          </div>

          <h1 className="text-3xl font-bold text-blue-600">
            MediSense
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>
        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-5">

          <button className="font-semibold text-blue-600 hover:text-blue-800">
            Login
          </button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;