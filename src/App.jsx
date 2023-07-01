import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'

function App() {

  return (
    <div>
      <Header />
      <main>
      <Meme />
      </main>
    </div>
  )
}

export default App
