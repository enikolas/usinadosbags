import React from 'react'
import { Route } from 'react-router-dom'

import './Content.css'
import Home from '../pages/home/Home'
import SobreNos from '../pages/sobreNos/SobreNos'
import Produtos from '../pages/produtos/Produtos'
import Fotos from '../pages/fotos/Fotos'
import Servicos from '../pages/servicos/Servicos'
import Contato from '../pages/contato/Contato'

const Content = () => (
  <div className='Content'>
    <Route exact path='/' component={Home} />
    <Route path='/sobrenos' component={SobreNos} />
    <Route path='/produtos' component={Produtos} />
    <Route path='/fotos' component={Fotos} />
    <Route path='/servicos' component={Servicos} />
    <Route path='/contato' component={Contato} />
  </div>
)

export default Content
