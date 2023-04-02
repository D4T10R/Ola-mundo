import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";


function AppRoutes() {



  return (
    <BrowserRouter >
      <Menu />

      <Routes >
        <Route path="/" element={<Inicio/>} />
        <Route path="sobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
