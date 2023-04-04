import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Post from "./paginas/post"
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "paginas/naoEncontrada";


function AppRoutes() {



  return (
    <BrowserRouter >
      <Menu />

      <Routes >

        <Route path="/" element={<PaginaPadrao/>} >
          <Route index element={<Inicio/>} />  // o atributo index faz com que eu pegue a mesma rota do elemento pai ou seja é = path="/" //
          <Route path="sobreMim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
          <Route path="*" element={<NaoEncontrada/>}/>

        {/*

          na rota "/" a estrutura a ser renderizada: 
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

          na rota "/sobremim" a estrutura a ser renderizada: 
          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>

        */}
        
        <Route path="*" element={<div>pagina não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
