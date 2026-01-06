import ProductContainer from "./components/ProductContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import potatoData from "./data/potatoes.js";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
