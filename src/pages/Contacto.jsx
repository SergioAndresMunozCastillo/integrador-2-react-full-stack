import React from 'react'

const Contacto = () => {
  return (
    <main>
        <section class="contact-header-section">
          <header>
            <h1>Reciba el servicio completo de EMBERTECHNEWS con tan solo unos clics</h1>
            <h2>Contactenos</h2>
          </header>
        </section>
      
        <section class="contact-section">
          <div class="contact-section__form-container">
            <form action="" class="contact-form">
              <input type="text" placeholder="Nombre"/>
              <input type="email" placeholder="Email"/>
              <textarea name="" cols="30" rows="10" placeholder="Comentarios"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div class="contact-section__info-container">
            <h3>Dirección: Calle irreal plana. Colonia Inmaterial</h3>
            <h3>Telefono: +52 614 5 78 96 12</h3>
            <h3>Email: contact@embertechnews.com</h3>
          </div>
        </section>
    </main>
    
  )
}

export default Contacto