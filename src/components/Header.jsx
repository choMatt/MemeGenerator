import React from 'react'
import TrollFace from "../assets/TrollFace,ong"

const Header = function(){
    return (
        <header>
            <img src={TrollFace}/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header