import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Form from "./components/Form";

function App() {
  const [memesData, setMemesData] = useState({});
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    memeImage: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemesData(data));
  }, []);

  function handleChange(event) {
    console.dir(event);
    const { value, name } = event.target;
    setMemes((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  function getNewImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randNum = Math.floor(Math.random() * memesArray.length);
    const memeImage = memesArray[randNum].url;
    setMemes((prevSetMemes) => {
      return {
        ...prevSetMemes,
        memeImage: memeImage,
      };
    });
  }

  return (
    <div>
      <Header />
      <main>
        <Form handleChange={handleChange} getNewImage={getNewImage} />
        <Meme
          memeImage={memes.memeImage}
          topText={memes.topText}
          bottomText={memes.bottomText}
        />
      </main>
    </div>
  );
}

export default App;
