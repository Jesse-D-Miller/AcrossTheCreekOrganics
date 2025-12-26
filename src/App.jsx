import ProductContainer from "./components/productContainer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductContainer />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/contact"
              element={<div>Contact Form Placeholder</div>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
