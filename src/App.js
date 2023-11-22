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

function App() {
  return (
    <Router>
    <Navbar></Navbar>

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

        <Route exact path="/produto/:id" element={<Produto />}>
        </Route>
        
    </Routes>

    <Footer></Footer>
    </Router>
    

  );
}

export default App;
