import React from 'react'

const Meme = function(props){
    return (
        <div className="meme">
            <img src={props.memeImage} className="meme__image" />
            <p className="meme__text meme__text--top">{props.topText}</p>
            <p className="meme__text meme__text--bottom">{props.bottomText}</p>
        </div>
    )
}


export default Meme