import React from 'react'
import Header from './components/Header'
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'

import './app.css'

export default function App(){
  return(
    <div className='container'>
    <Header/>
    <Aside/>
    <Content/>
    <Footer/>
    </div>
  )
}