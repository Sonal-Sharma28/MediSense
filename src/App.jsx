import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;