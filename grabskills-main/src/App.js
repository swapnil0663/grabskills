import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Health from "./pages/health";
import Environment from "./pages/environment";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health" element={<Health />} />
          <Route path="/environment" element={<Environment />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;