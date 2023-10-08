import CarritoContext from '../contexts/CarritoContext'
import ProductoContext from '../contexts/ProductoContext'
import Card from '../components/Card'
import { useContext } from 'react'

const Inicio = () => {
    const {productos} = useContext(ProductoContext)
    const { carrito, agregarCarritoContext } = useContext(CarritoContext)

  return (
    <main>
        <section className='section-cards'>
            <header className='section-cards__cards-header'>
                <h1>Columna de productos</h1>
            </header>
            <div className='cards-container'>
            {
              productos && productos.map( (producto, idx) => (
                <Card key={idx} producto={producto} agregarCarritoContext={agregarCarritoContext}/>
              ))
            }
            </div>
        </section>
    </main>
  )
}

export default Inicio