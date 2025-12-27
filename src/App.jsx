import ProductContainer from "./components/productContainer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ProductPage from "./components/ProductPage.jsx";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import potatoData from "./data/potatoes.js";

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
              element={<ContactForm />}
            />
            <Route path="/:id" element={<ProductPage data={potatoData} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
