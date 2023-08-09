import AllBeers from '../../../assets/img/Group 4.png'
import RandomBeer from '../../../assets/img/Group 5.png'
import './Home.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiLink } from '../../data/data.js'

function Home() {
  const [randomBeer, setRandomBeer] = useState([])
  useEffect(() => {
    fetch(`${apiLink}/random`)
      .then(response => response.json())
      .then(response => setRandomBeer(response))
  }, [])

  return (
    <div>
      <section className={'landing_section'}>
        <article>
          <Link to={'/all'}>
            <img src={AllBeers} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illo itaque soluta. Ab aliquid corporis
            explicabo maiores nulla vitae voluptatibus.
          </p>
        </article>
        <article>
          <Link to={`/details/${randomBeer._id}`}>
            <img src={RandomBeer} alt="" />
          </Link>
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
