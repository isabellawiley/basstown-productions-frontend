import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
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
        <Route path="/basstown-productions-frontend/" element={<Home />} />
        <Route path="/basstown-productions-frontend/about" element={<About />} />
        <Route path="/basstown-productions-frontend/services" element={<Services />} />
        <Route path="/basstown-productions-frontend/productions" element={<Productions />} />
        <Route path="/basstown-productions-frontend/faq" element={<Faq />} />
        <Route path="/basstown-productions-frontend/contact" element={<Contact />} />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
