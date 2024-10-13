import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-blue-700 text-white flex flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
