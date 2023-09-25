import { useContext } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import Card from '../components/Card'

const Inicio = () => {
    const {productos} = useContext(ProductoContext)

  return (
    <main>
        <section className='section-cards'>
            <header className='section-cards__cards-header'>
                <h1>Columna de productos</h1>
            </header>
            <div className='cards-container'>
            {
              productos && productos.map( (producto, idx) => (
                <Card key={idx} producto={producto} />
              ))
            }
            </div>
        </section>
    </main>
  )
}

export default Inicio