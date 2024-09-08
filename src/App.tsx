import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import { Home, Stratagems } from "./pages";

function App() {
  return (
    <BrowserRouter basename="/stratagem-hero">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stratagems" element={<Stratagems />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
