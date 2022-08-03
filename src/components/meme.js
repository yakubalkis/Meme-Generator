import React from "react";


export default function Meme(){
    
    
    const [meme, setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function(){
       
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

   
    return (
        <main>
          
            <div className="form">
                    <div className="inputs">
                        <input 
                        className="input" 
                        type="text"  
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange} 
                        />
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Buttom text"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                        />
                    </div>
                <button onClick ={getMemeImage}className="button"><p>Get a new image</p></button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}