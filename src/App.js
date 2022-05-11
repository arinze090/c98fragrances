import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe";
import Slider from "./components/Carousel";
import Arinze from "./components/Products/Product";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
      <Arinze />
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
