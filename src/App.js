import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";



function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Inicio/>} />
        <Route path="sobreMim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
