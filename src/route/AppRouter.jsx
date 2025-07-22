import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import User from '../components/User'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Projects from '../components/pages/Projects'
import Login from '../components/pages/Login'
import Users from '../components/pages/Users'
import Home from '../components/pages/Home'
import UserDetail from '../components/pages/UserDetail'
import UserList from '../components/pages/UserList'

const AppRouter = props => {
  return (
 
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>

         <Route>
            <Route path='/' element={<Home/>} />

            <Route  path='/dashboard'/>
            <Route  path='/profile'/>
            <Route  path='/setting'/>

        </Route>
        < Route path='/users' element={<Users/>}>
        <Route index element={<UserList/>} />
        <Route path=':id' element={<UserDetail />} />
        
        
        </Route>


    </Routes>
  )
}

export default AppRouter