import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftImage from "./components/LeftImage";
import MainContent from "./components/MainContent";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  return (
    <div className="border-2 border-black h-screen w-full flex overflow-hidden">
      <BrowserRouter>
        <div className="flex w-full h-full">
          <LeftImage />
          <Routes>
            <Route path="/" element={<MainContent><HomePage /></MainContent>} />
            <Route path="/about" element={<MainContent><About /></MainContent>} />
            {/* Aquí puedes agregar más rutas dinámicas, por ejemplo: */}
            {/* <Route path="/about" element={<MainContent><AboutPage /></MainContent>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
