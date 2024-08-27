import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import { Home, HowToPlay, Stratagems } from "./pages";

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
