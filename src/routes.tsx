// ** Páginas
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import Sobre from "pages/Sobre";

// ** Componentes
import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";
import { Prato } from "pages/Prato";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}
