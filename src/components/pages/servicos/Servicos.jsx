import React from 'react'
import { Route } from 'react-router-dom'

import './Servicos.css'
import BigBags from './descricao/BigBags'
import SubServicos from './descricao/SubServicos'
import Utilizacao from './descricao/Utilizacao'
import Manutencao from './descricao/Manutencao'
import Beneficios from './descricao/Beneficios'
import Vantagens from './descricao/Vantagens'
import MenuItem from '../../MenuItem'

const Servicos = ({ location: { pathname } }) => (
  <div className='Servicos'>
    <section className='content-picker'>
      <nav>
        <ul>
          <li>
            <MenuItem
              label='Big Bags'
              to='/servicos/bigbags'
              path={pathname} />
          </li>
          <li>
            <MenuItem
              label='Serviços'
              to='/servicos/servicos'
              path={pathname} />
          </li>
          <li>
            <MenuItem
              label='Utilização'
              to='/servicos/utilizacao'
              path={pathname} />
          </li>
          <li>
            <MenuItem
              label='Manutenção'
              to='/servicos/manutencao'
              path={pathname} />
          </li>
          <li>
            <MenuItem
              label='Benefícios'
              to='/servicos/beneficios'
              path={pathname} />
          </li>
          <li>
            <MenuItem
              label='Vantagens'
              to='/servicos/vantagens'
              path={pathname} />
          </li>
        </ul>
      </nav>
    </section>
    <section className='content'>
      <Route exact path='/servicos' component={BigBags} />
      <Route path='/servicos/bigbags' component={BigBags} />
      <Route path='/servicos/servicos' component={SubServicos} />
      <Route path='/servicos/utilizacao' component={Utilizacao} />
      <Route path='/servicos/manutencao' component={Manutencao} />
      <Route path='/servicos/beneficios' component={Beneficios} />
      <Route path='/servicos/vantagens' component={Vantagens} />
    </section>
  </div>
)

export default Servicos
