import react from 'react'
import { useState } from 'react'


const App = () => {
  
  const apikey = ""//insert from gmail
  const url = "https://api.nasa.gov/planetary/apod?api_key="

  const [image,setImage] = useState('https://t4.ftcdn.net/jpg/06/14/46/77/360_F_614467744_7eLjYhKWJIvnu8fk8MTp9VXFYpB15J3p.jpg')
  const [text,setText] = useState("Sunset")

  const handleClick = async () => {
     const fullUrl = (url+apikey+"&count=1")
    const response = await fetch(fullUrl)
    const data = await response.json()
    setImage (data[0]["url"])
    setText (data[0]["title"])

    
  }

  return (
    <div id='mainContainer'>
      <div id='h1andbutton'>
        <h1>Click the button below to generate a random image</h1>
        <button onClick={handleClick}>CLICK ME</button>
      </div>

      <div id='imgContainer'>
        <img src= {image}></img>
        <p>{text}</p>
      </div>
    </div>
  ) 
}

export default App