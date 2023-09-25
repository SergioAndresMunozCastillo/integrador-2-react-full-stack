import React, { createContext, useContext, useEffect, useState } from 'react'
import { get } from '../utils/https';

const ProductoContext = createContext();

const url = "http://localhost:8080/productos";


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

    const data = {productos, setProductos, obtenerProductos}

  return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}

export {ProductoProvider}

export default ProductoContext