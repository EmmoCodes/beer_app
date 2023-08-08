import React from 'react'
import BeerIcon from '../../../assets/img/bier 1.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <div>
        <Link to={'/'}>
          <img src={BeerIcon} alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
