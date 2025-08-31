import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Macbanner from "./components/Macbanner";
import Macstudent from "./components/Macstudent";
import Navbar from "./components/Navbar";
import Navoffer from "./components/Navoffer";
import Products from "./components/Products";
import Slide from "./components/Slide";

function App() {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        <Navoffer />
        <Hero />
        <Macstudent />
        <Macbanner />
        <Products />
        <Slide />
        <Footer />
      </div>
    </div>
  );
}

export default App;
