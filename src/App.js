import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Home from "./components/Home";
import Productions from "./components/Productions";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
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
