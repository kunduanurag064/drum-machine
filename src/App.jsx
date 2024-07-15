import { useState } from 'react'
import './App.css'

function App() {
const [volume , setVolume] = useState(25);
const [playersWork , setWork] = useState('');

const handleVolume = async (e)=>{
      if(power){ setVolume(e.target.value);
      setWork(`volume : ${volume}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setWork('');}
      
}

  const [power, setPower] = useState(true);
  const [powerStyle,setPowerStyle] = useState({
    backgroundColor:"blue",
    width: "20px",
    height: "25px",
    float: "right",
  })

  const [bank, setBank] = useState("piano");
  const [bankStyle,setBankStyle] = useState({
    backgroundColor:"blue",
    width: "20px",
    height: "25px",
    float: "left"
  })

  const handlePowerStatus = ()=>{
    const power_status = document.querySelector("#power-status");
    if(power){
      setPowerStyle({
        ...powerStyle,
        backgroundColor:"blue",
        width: "20px",
        height: "25px",
        float: "left"
      })
      setPower(false);
      setWork('');
    }
    else{
      setPowerStyle({
        ...powerStyle,
        backgroundColor:"blue",
        width: "20px",
        height: "25px",
        float: "right"
      })
      setPower(true);
    }
  }

  const handleBankStatus = ()=>{
    const power_status = document.querySelector("#power-status");
    if(power){
    if(bank==="piano"){
      setBankStyle({
        ...bankStyle,
        backgroundColor:"blue",
        width: "20px",
        height: "25px",
        float: "right"
      })
      setBank("Heater");
    }
    else{
      setBankStyle({
        ...bankStyle,
        backgroundColor:"blue",
        width: "20px",
        height: "25px",
        float: "left"
      })
      setBank("piano");
    }
    setWork(bank);
  }
  }

  const audioFiles = [{id:'Q',name:'audio Q'},{id:'W',name:'audio W'},{id:'E',name:'audio E'},{id:'A',name:'audio A'},{id:'S',name:'audio S'},{id:'D',name:'audio D'},{id:'Z',name:'audio Z'},{id:'X',name:'audio X'},{id:'C',name:'audio C'}];


  const playMusic = (buttonplayed)=>{
      if(power) setWork(buttonplayed.name);
  }
  return (
    <>
      <div className="container">
        <div className="complete-music-system">
        <div className="music-buttons">
          {audioFiles.map((mykey) => (<button key={mykey.id} onClick={()=>playMusic(mykey)}>{mykey.id}</button>))}
        </div>
        <div className="controller-buttons">
          <center>
            <h3>POWER</h3>
            <div className="power-start">
              <div className="power-status" onClick={handlePowerStatus} style={powerStyle}></div>        
            </div>
            <br/>
            <div className="display" style={{fontWeight:"bold",fontSize:"25px"}}>{playersWork}</div>
            <br/>
            <input type="range" min="0" max="100" value={volume} onChange={handleVolume} />

            <br/>
            <h3>BANK</h3>
            <div className="power-start">
              <div className="power-status" onClick={handleBankStatus} style={bankStyle}></div>        
            </div>

          </center>
        </div>  


        </div>

      </div>
    </>
  )
}

export default App
