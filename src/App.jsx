function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-blue-600">
          🩺 MediSense
        </h1>

        <div className="space-x-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </nav>
    </div>
  );
}

export default App;