import {useState,useEffect} from 'react' 
import pauseMobile from "./images/pattern-divider-mobile.svg"
import pauseDesktop from "./images/pattern-divider-desktop.svg"
import icon from "./images/icon-dice.svg"



function App() {
  const [text,setText]=useState([])
  const [active,setActive]=useState(false)

  const handleClick=()=>{
    setActive(current=>!current)
  }

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data= await res.json()
    console.log(data)
    setText(data.slip)
  } 
  const call=()=>{
    handleClick();
    fetchAdvice();
  }
  useEffect(()=>{
  
    fetchAdvice()
  },[])
  return (
    <div className="container"  style={{
      backgroundColor: active ? 'salmon' : '',
    
      
    }}>
      <h1>Advice #{text.id}</h1>
      <p style={{color : active ? 'black' : ''}}>{text.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop}/>
        <img src={pauseMobile} />
      </picture>
      <div>
        <button onClick={call}>
          <img src={icon} alt=""/>
        </button>
      </div>
    </div>
  );
}

export default App;
