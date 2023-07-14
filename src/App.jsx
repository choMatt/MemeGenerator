import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'
import Form from './components/Form'

function App() {

  const [memesData, setMemesData] = useState({
    topText: '', 
    bottomText:  '',
    memeImage: '',
  })

  console.log(memesData.topText, memesData.bottomText)

  function handleChange(event){
    const {value, name} = event.target
    setMemesData((prevMemeData) => {
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
