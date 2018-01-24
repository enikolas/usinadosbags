import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ label, to, path, icon }) => {
  const isSelected = (to.length === 1 && to === path) || (to.length > 1 && path.startsWith(to))
  const className = isSelected ? 'selected' : ''

  return (
    <li className={className}>
      <div className='icon'>
        { icon ? icon : '' }
      </div>
      <Link to={to}>
        {label}
      </Link>
    </li>
  )
}

export default MenuItem
