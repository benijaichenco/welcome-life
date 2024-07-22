import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Picture1 from "./images/gallery1.jpeg";
import Picture2 from "./images/gallery2.jpeg";
import Picture3 from "./images/gallery3.jpeg";
import Picture4 from "./images/gallery4.jpeg";
import Picture5 from "./images/gallery5.jpeg";

function App() {
  const allPictures = [Picture1, Picture2, Picture3, Picture4, Picture5];
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/welcome-life" exact element={<Home />} />
          <Route path="/welcome-life/gallery" exact element={<Gallery prop1={allPictures} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
