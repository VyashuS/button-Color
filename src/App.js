
import React, { useState } from 'react';


function App() {
  const [color, setColor] = useState("black");
  const blue = () => {
    setColor("lightblue")
  }

  const red = () => {
    setColor("red")
  }

  const yellow = () => {
    setColor("yellow")
  }
  const green = () => {
    setColor("green")
  }
  const purple = () => {
    setColor("purple")
  }
  const pink = () => {
    setColor("pink")
  }

  return (
    <>

      <div className='div' style={{ backgroundColor: color }}>

        <div className='small'>
          {/* <h1>Chnage the Colors.</h1><br /> */}
          <button onClick={blue} style={{ backgroundColor: "lightblue" }} >Light Blue</button>
          <button onClick={red} style={{ backgroundColor: "red" }}> Red</button>
          <button onClick={yellow} style={{ backgroundColor: "yellow" }}> Yellow</button>
          <button onClick={pink} style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={green} style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={purple} style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("olive")} style={{ backgroundColor: "olive" }}>Olive</button>
        </div>

      </div>
    </>

  )
}

export default App;


// onclick methoed hmesha ek function hi accaept karta hai isliye hmane lst wale me function bnaya hai, usk bad setColor k sath color diay hai,,, agr hm setColor("red") aise denge to sidha returned value milega joki onclick ko nahi chahiye
