import React, { useEffect } from 'react'
import AllBeers from '../../../assets/img/Group 4.png'
import RandomBeer from '../../../assets/img/Group 5.png'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className={'landing_section'}>
        <article>
          <Link to={'/allbeers'}>
            <img src={AllBeers} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illo itaque soluta. Ab aliquid corporis
            explicabo maiores nulla vitae voluptatibus.
          </p>
        </article>
        <article>
          <img src={RandomBeer} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illo itaque soluta. Ab aliquid corporis
            explicabo maiores nulla vitae voluptatibus.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Home
