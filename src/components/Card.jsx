import { useContext } from 'react'
//import './Card.scss'

const Card = ({ producto }) => {
  
  // console.log(producto)

  const handleClick = (e) => {
    //console.log(producto)
    e.preventDefault()
    
  }

  return (
    <a className="card" href="#" onClick={handleClick}>
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Card