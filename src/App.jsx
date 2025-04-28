import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
