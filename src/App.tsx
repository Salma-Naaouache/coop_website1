import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import OurProducts from './components/OurProducts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

type Page = 'home' | 'about' | 'products' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <AboutUs />
      case 'products':
        return <OurProducts />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App