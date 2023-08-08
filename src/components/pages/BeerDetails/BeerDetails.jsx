import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiLink } from '../../data/data.js'
import Navbar from '../../shared/Navbar/Navbar.jsx'
import BackButton from '../../../assets/img/Vector.png'

function BeerDetails() {
  const [beerItemDetails, setBeerItemDetails] = useState([])
  const beerId = useParams().id

  useEffect(() => {
    fetch(`${apiLink}/${beerId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong with fetch')
        }
        return response.json()
      })
      .then(beerItemDetails => setBeerItemDetails(beerItemDetails))
  }, [])

  return (
    <>
      <article className={'beer_detail'}>
        <div>
          <img className={'detail_img'} src={beerItemDetails.image_url} alt="" />
        </div>
        <div>
          <h2>{beerItemDetails.name}</h2>
          <p>{beerItemDetails.tagline}</p>
          <p>created by: {beerItemDetails.name}</p>
        </div>
        <Link to={'/'}>
          <img className={'back_button'} src={BackButton} alt="" />
        </Link>
      </article>
      <Navbar />
    </>
  )
}

export default BeerDetails
