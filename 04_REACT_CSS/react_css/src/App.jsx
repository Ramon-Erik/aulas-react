import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComp from './components/MyComp'
import './App.css'
import './components/MyComp.module.css'

function App() {
  return (
    <>
    <h1 className='meuTitulo'>My compp</h1>
      <MyComp></MyComp>      
    </>
  )
}

export default App
