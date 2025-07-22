import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRouter from './route/AppRouter'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const {theme }= useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className=' bg-pink-200 dark:bg-purple-600 text-green-300 dark:text-white min-h-screen flex flex-col transition-colors duration-300'>
    
      <Navbar/>
      <AppRouter/>
      <Footer/>
    
    </div>
   
  )
}

export default App