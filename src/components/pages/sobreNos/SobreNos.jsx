import React from 'react'

import './SobreNos.css'
import empresa from './empresa.jpg'

const SobreNos = () => (
  <div className='SobreNos'>
    <section className='banner'>
      <figure>
        <img src={empresa} alt='Fachada da empresa' />
      </figure>
    </section>
    <section className='content firstLetterPadding'>
      <p>
A usina dos bags nasceu focada em manutenção e vendas de
big bags usados, para atender ao mercado que entendemos estar
sedento por este produto - big bag usado em estado de big bag
SEMI-NOVO, pois com a globalização e o meio ambiente.
      </p>

      <p>
Para chegar ao ponto de venda, Os big bags usados adquiridos em
fazendas e indústria, passam primeiramente por higienização,
que consta em lavagem dos mesmos, com posterior secagem a
sombra para não danificar as fibras do big bag.
      </p>

      <p>
Após este procedimento os big bags vão para inspeção em mesa
visual, onde são rigorosamente separados os que se encontram em
perfeito estado e os que necessitam intervenção.
      </p>

      <p>
Estes são direcionados a reposição de peças, troca de alças e
remendos em furos pequenos, para depois de novamente serem
inspecionados, ser considerado aptos para a expedição.
      </p>

      <p>
Separamos os big bags de diferentes produtos transportados para
evitar contaminação no seu transporte, ou seja, vendemos big
bags previamente separados por origem bags que transportaram
gêneros alimentícios, são vendidos novamente para gêneros
alimentícios e afins.
      </p>

      <p>
Estamos localizados em local de fácil acesso para remetermos
os big bags a qualquer lugar do país.
     </p>
    </section>
  </div>
)

export default SobreNos
