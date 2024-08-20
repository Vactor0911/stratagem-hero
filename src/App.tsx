import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import HowToPlay from "./components/HowToPlay.tsx";
import Stratagems from "./components/Stratagems.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/how-to-play" element={<HowToPlay />}></Route>
        <Route path="/stratagems" element={<Stratagems />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
