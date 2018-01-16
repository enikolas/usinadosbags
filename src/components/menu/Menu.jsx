import React from 'react'
import { withRouter } from 'react-router-dom'

import './Menu.css'
import MenuItem from '../MenuItem'

const Menu = ({ location: { pathname } }) => (
  <nav className='Menu'>
    <ul>
      <li>
        <MenuItem
          label='home'
          to='/'
          path={pathname} />
      </li>
      <li>
        <MenuItem
          label='sobre nós'
          to='/sobrenos'
          path={pathname} />
      </li>
      <li>
        <MenuItem
          label='produtos'
          to='/produtos'
          path={pathname} />
      </li>
      <li>
        <MenuItem
          label='fotos'
          to='/fotos'
          path={pathname} />
      </li>
      <li>
        <MenuItem
          label='serviços'
          to='/servicos'
          path={pathname} />
      </li>
      <li>
        <MenuItem
          label='contato'
          to='/contato'
          path={pathname} />
      </li>
    </ul>
  </nav>
)

export default withRouter(Menu)
