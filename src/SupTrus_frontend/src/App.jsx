import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import TrackProduct from "./pages/TrackProduct.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="container mt-4 main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/track-product" element={<TrackProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
