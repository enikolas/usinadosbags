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
    <Header />
    <BrowserRouter>
      <div className='BrowserRouter'>
        <Menu />
        <Content />
      </div>
    </BrowserRouter>
    <Footer />
  </div>
)

export default App
