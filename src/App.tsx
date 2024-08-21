import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/pages/Header.tsx";
import Home from "./components/pages/Home.tsx";
import HowToPlay from "./components/pages/HowToPlay.tsx";
import Stratagems from "./components/pages/Stratagems.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/how-to-play" element={<HowToPlay />}></Route>
        <Route path="/stratagems" element={<Stratagems />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
