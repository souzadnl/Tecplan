import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Produtos from "./pages/Produtos"
import Quemsomos from "./pages/Quemsomos"
import Carrinho from "./pages/Carrinho"
import Footer from "./components/Footer"
import { Modal } from "bootstrap"
import Produto from "./pages/Produto"
import ScrollToTopOnPageChange from "./pages/ScrollToTopOnPageChange"
import Produtos_completo from "./pages/Produtos_completo"

function App() {

  const images = ['./images/AradoAgricola.jpg']

  return (
    <Router>
    <Navbar></Navbar>

    <ScrollToTopOnPageChange></ScrollToTopOnPageChange>
    <Routes>
      <Route exact path="/" element={<Home />}>
        </Route>

        <Route exact path="/produtos" element={<Produtos />}>
        </Route>

        <Route exact path="/quemsomos" element={<Quemsomos />}>
        </Route>

        <Route exact path="/contato" element={<Contato />}>
        </Route>

        <Route exact path="/carrinho" element={<Carrinho />}>
        </Route>

        <Route exact path="/produtos/:id" element={<Produto />}>
        </Route>

        <Route exact path="/produtos_completo" element={<Produtos_completo />}>
        </Route>
  
    </Routes>
  
    

    <Footer></Footer>
    </Router>
    

  );
}

export default App;
