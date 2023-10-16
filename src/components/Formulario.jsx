import React, { useContext, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import ProductoContext from '../contexts/ProductoContext'
import "../sass/Formulario.scss"

const formInicial = {
    id: null, 
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
    const [form, setForm, handleChange] = useForm(formInicial)
    const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar, setProductoAEditar])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (form.id === null){
                await crearProductoContext(form)
            } else {
                await actualizarProductoContext(form)
            }
            handleReset()
        } catch (error) {
          console.error('Ocurrió un error en el handleSubmit', error)  
        }
    }

    const handleReset = () => {
        const handleReset = ()  => {
          setForm(formInicial)
          setProductoAEditar(null)
        }
    }
    return (
    <>
        <h2>{ productoAEditar ? 'Editando' : 'Agregando' }</h2>
        <div className='form-container'>
          <div className='form-container__text-presentation'>
            <h3>{ productoAEditar ? 'Edita' : 'Añade' } { productoAEditar ? 'el' : 'un' } producto { productoAEditar ? 'seleccionado' : 'nuevo' }</h3>
            <p>Con nuestro nuevo administrador de productos, podrás manejar la tienda de una manera mucho más eficiente!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <br />
              <input type="text" placeholder="Nombre" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Precio" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Stock" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Marca" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Categoria" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Detalles" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="text" placeholder="Foto" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
            </div>
            <div>
              <br />
              <input type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
            </div>
            <button type="submit">Guardar</button>
            <button type="reset" onClick={handleReset}>Limpiar</button>
          </form>
        </div>
        
    </>
  )
}

export default Formulario