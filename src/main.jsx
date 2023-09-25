import { ProductoProvider } from "./contexts/ProductoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/alta"></Route>
          <Route path="/nosotros"></Route>
          <Route path="/contacto"></Route>
          <Route path="/carrito"></Route>
        </Routes>
      </BrowserRouter>
    </ProductoProvider>

  </React.StrictMode>,
)
