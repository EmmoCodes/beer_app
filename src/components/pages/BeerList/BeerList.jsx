import React, { useEffect, useState } from 'react'
import { apiLink } from '../../data/data.js'
import BeerItem from '../../BeerItem/BeerItem.jsx'
import './BeerList.scss'
import Navbar from '../../shared/Navbar/Navbar.jsx'

function BeerList() {
  const [beerItem, setBeerItem] = useState([])

  useEffect(() => {
    fetch(apiLink)
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong with fetch')
        }
        return response.json()
      })
      .then(response => setBeerItem(response))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <div>
      <section className={'beer_section_overview'}>
        {beerItem.map(beer => (
          <BeerItem key={beer._id} beer={beer} />
        ))}
      </section>
      <Navbar />
    </div>
  )
}

export default BeerList
