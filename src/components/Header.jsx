import React from 'react'
import TrollFace from "../assets/TrollFace.png"

const Header = function(){
    return (
        <header className="header">
            <img src={TrollFace} className="header__image" />
            <h1 className="header__title">Meme Generator</h1>
            <h3 className="header__sub-title">React Course - Project 3</h3>
        </header>

    )
}

export default Header