import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../Weather'
import Import from '../Import'
import NewsApp from '../News'

const Home = () => {
  return (
    <div>
      
      <Link to='/users' className='text-purple-400 underline' >
      View Users 
      </Link>
      <WeatherApp/>
      <NewsApp/>
      
      
      
    </div>
  )
}

export default Home