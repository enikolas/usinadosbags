import React from 'react'

import './Home.css'
import logo from './logo.png'
import bigbag01 from './bigbag01.png'
import bigbag02 from './bigbag02.png'
import bigbag03 from './bigbag03.png'

const Home = () => (
  <div className='Home'>
    <section className='banner'>
      <h3>Big Bags semi novos e usados</h3>
    </section>

    <section className='content'>
      <p>Nossos bigs bags são confeccionados em material de Polipropileno tratado contra raios ultra violeta.</p>
      <p>Trabalhamos com toda gramatura existente e também podem ser fabricados em tecido laminado.</p>
    </section>

    <section className='images'>
      <a
        href='http://usinadosbags.com.br/catalogo/catalogo.php'
        className='catalogo'
        target='_blank'
        rel='noopener noreferrer'>
        <figure className='logo'>
          <img src={logo} alt='Logo da empresa Usina dos Bags' />
          <figcaption>Conheça nosso Catálogo!</figcaption>
        </figure>
      </a>
      <figure className='bigbag'>
        <img src={bigbag01} alt='Big bag com válvula superior' />
      </figure>
      <figure className='bigbag'>
        <img src={bigbag02} alt='Big bag com boca superior aberta' />
      </figure>
      <figure className='bigbag'>
        <img src={bigbag03} alt='Big bag com válvula superior e válvula inferior' />
      </figure>
    </section>
  </div>
)

export default Home
