import ProductContainer from "./components/productContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
