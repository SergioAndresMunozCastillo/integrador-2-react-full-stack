import { ProductoProvider } from "./contexts/ProductoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alta from "./pages/Alta";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import './sass/Body.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductoProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/alta" element={<Alta/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/carrito"></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </ProductoProvider>

  </React.StrictMode>,
)
