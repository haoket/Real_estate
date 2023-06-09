import './App.scss'
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Banner from './components/Banner'
import Brand from './components/Brand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import Residents from './components/Residents'
import Value from './components/Value'



const Banners = React.lazy(() => import('./components/Banner'));
function App() {

  return (
    <div className='content'>
      <div className='box-blur' />

      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>

        <Banners />

      </Suspense>
      <Brand />
      <Residents />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
