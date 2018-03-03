import React from 'react'

import './Fotos.css'
import foto01 from './foto01.png'
import foto02 from './foto02.png'
import foto03 from './foto03.png'
import foto04 from './foto04.png'
import foto05 from './foto05.png'
import foto06 from './foto06.png'

const Fotos = () => (
  <div className='Fotos'>
    <section>
      <figure>
        <img src={foto01} alt='Uma pilha de liners' />
      </figure>
      <figure>
        <img src={foto02} alt='Um big bag com o selo do Inmetro' />
      </figure>
      <figure>
        <img src={foto03} alt='Estante com o material usado para criação das alças' />
      </figure>
      <figure>
        <img src={foto04} alt='Máquina de costuma a costurar uma alça' />
      </figure>
      <figure>
        <img src={foto05} alt='Máquina de costura adicionando a alça a um big bag em etapa de fabricação' />
      </figure>
      <figure>
        <img src={foto06} alt='Imagem aberta do andar da fábrica na linha de produção' />
      </figure>
    </section>
  </div>
)

export default Fotos
