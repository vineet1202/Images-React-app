import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
