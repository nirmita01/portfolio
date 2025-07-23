import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import WeatherApp from '../Weather'
import Import from '../Import'
import NewsApp from '../Newss'
import Portfolio4 from '../Hero'
import NewsList from '../News'
import TypingTest from '../TypingText'

const Home = () => {
  return (
    <div>
      <Portfolio4/>
      <NewsList/>
      <TypingTest/>
      <Link to='/users' className='text-purple-400 underline' >
      View Users 
      </Link>
      <WeatherApp/>
      <NewsApp/>
      
      
      
    </div>
  )
}

export default Home