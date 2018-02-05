import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './header/Header'
import Menu from './menu/Menu'
import Content from './content/Content'
import Footer from './footer/Footer'
import '../fonts/font.css'
import './App.css'

const App = () => (
  <div className='App'>
    <BrowserRouter>
      <div className='BrowserRouter'>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  </div>
)

export default App
