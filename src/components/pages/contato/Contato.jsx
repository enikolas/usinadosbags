import React from 'react'

import './Contato.css'

const GoogleMap = ({ largura, altura }) => (
  <iframe
    title='Google Map'
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.8293895089233!2d-46.54896347079136!3d-23.485068769031994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8427586229%3A0xdf36c16a7d9578e!2sUsina+Dos+Bags!5e0!3m2!1sen!2sbr!4v1515910509499'
    width={largura}
    height={altura}
    frameBorder='0'
    allowFullScreen />
)

const Contato = () => (
  <div className='Contato'>
    <section className='mapa'>
      <GoogleMap
        largura={800}
        altura={400} />
    </section>
  </div>
)

export default Contato
