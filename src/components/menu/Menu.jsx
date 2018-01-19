import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Menu.css'
import MenuItem from '../MenuItem'
import BurguerMenu from '../burguerMenu/BurguerMenu'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }
  
  render() {
    const { location: { pathname } } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className='Menu' onClick={ () => { isOpen && this.setState({ isOpen: false }) }}>
        <BurguerMenu
          isOpen={isOpen}
          onClick={ () => { this.setState({ isOpen: !isOpen }) } } />
        <div className={`MainMenu ${ isOpen ? 'open' : '' }`}> 
          <ul>
            <MenuItem
              label='home'
              to='/'
              path={pathname} />
            <MenuItem
              label='sobre nós'
              to='/sobrenos'
              path={pathname} />
            <MenuItem
              label='produtos'
              to='/produtos'
              path={pathname} />
            <MenuItem
              label='fotos'
              to='/fotos'
              path={pathname} />
            <MenuItem
              label='serviços'
              to='/servicos'
              path={pathname} />
            <MenuItem
              label='contato'
              to='/contato'
              path={pathname} />
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Menu)
