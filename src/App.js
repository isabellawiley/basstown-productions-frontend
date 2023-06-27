import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Productions from "./components/Productions";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/productions" element={<Productions />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
    </div>
  );
}

export default App;
