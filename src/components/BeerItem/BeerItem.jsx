import React from 'react'
import { Link } from 'react-router-dom'

function BeerItem({ beer }) {
  return (
    <article className={'beer_frame'}>
      <div>
        <img src={beer.image_url} alt="" />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>created by: {beer.name}</p>
        <Link to={`/details/${beer._id}`}>Details</Link>
      </div>
    </article>
  )
}

export default BeerItem
