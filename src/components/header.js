import React from "react";
import trollFace  from '../img/troll-face.png'

export default function Head(){
    return (
        <header className="header">
            <img src={trollFace}/>
            <p>Meme Generator</p>
        </header>
    )
}