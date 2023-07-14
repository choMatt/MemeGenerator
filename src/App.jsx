import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'
import Form from './components/Form'

function App() {

  const [memes, setMemes] = useState({
    topText: '', 
    bottomText:  '',
    memeImage: '',
  })

  function handleChange(event){
    console.dir(event)
    const {value, name} = event.target
    setMemes((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value
      }
    })
  }

  

  return (
    <div>
      <Header />
      <main>
      <Form 
        handleChange={handleChange}
      />
      <Meme />
      </main>
    </div>
  )
}

export default App
