import React, { createContext, useContext, useEffect, useState } from 'react'
import { del, get, post, update } from "../utils/https";

const ProductoContext = createContext();

const url = "https://652c7cded0d1df5273ef714c.mockapi.io/productos/";


const ProductoProvider = ({children}) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // <= Array vacío hace solo una petición

    const obtenerProductos = async () => {
        try {
            const products = await get(url);

            console.log(products)
            setProductos(products)
        } catch (error) {
            console.log('Error al obtneer productos', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {
        try {
            const productoSavedNuevo = await post(url, productoNuevo)

            setProductos([...productos, productoSavedNuevo])
        } catch (error) {
            console.error('Falló crearProductoContext', error)
        }
    }

    const actualizarProductoContext = async (productoAEditar) => {
        try {
            const productoEditado = await update(url, productoAEditar, productoAEditar.id)
            const nuevaDB = productos.map(producto => producto.id === productoEditado.id? productoEditado : producto);
            setProductos(nuevaDB)
        } catch (error) {
            console.error('Falló actualizarProductoContext', error)   
        }
    }

    const eliminarProductoContext = async (id) => {
        try {
            const productoEliminado = await del(url, id)

            const nuevaDB = productos.filter(producto => producto.id !== id);

            setProductos(nuevaDB)
        } catch (error) {
            console.error('Falló eliminarProductoContext', error)
        }
    }

    const data = {productos, setProductos, obtenerProductos, crearProductoContext, actualizarProductoContext, eliminarProductoContext}

  return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}

export {ProductoProvider}

export default ProductoContext