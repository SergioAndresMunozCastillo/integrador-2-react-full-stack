import { ProductoProvider } from "./contexts/ProductoContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { CarritoProvider } from './contexts/CarritoContext'
import './index.css'
import React from 'react'
import './sass/Body.scss'
import Alta from "./pages/Alta";
import Carrito from "./pages/Carrito";
import ReactDOM from 'react-dom/client'
import Inicio from "./pages/Inicio.jsx";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider>
      <ProductoProvider>
        <DarkModeProvider>
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/alta" element={<Alta/>}></Route>
            <Route path="/nosotros" element={<Nosotros/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/carrito" element={<Carrito/>}></Route>
          </Routes>
          <Footer/>
          </BrowserRouter>
        </DarkModeProvider>
      </ProductoProvider>
    </CarritoProvider>

  </React.StrictMode>,
)
