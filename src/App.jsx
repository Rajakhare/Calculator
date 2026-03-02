import { useState } from "react";
import "./App.css";

let App = () => {
  let [value, setVal] = useState("")

  let press = (e) => {
    setVal(value + e)
  }

  let clean = () => {
    setVal("")
  }

  let Calc = () => {
    setVal(eval(value))
  }


  return(
    <div className="calculator">
      <input type="text" value={value} readOnly id="inputBox"/>
      <div className="buttons">
        <button onClick={clean}>Clean</button>
        <button onClick={() => press("/")}>/</button>
        <button onClick={() => press("*")}>*</button>
        <button onClick={() => press("-")}>-</button>

        <button onClick={() => press("7")}>7</button>
        <button onClick={() => press("8")}>8</button>
        <button onClick={() => press("9")}>9</button>
        <button onClick={() => press("+")}>+</button>

        <button onClick={() => press("4")}>4</button>
        <button onClick={() => press("5")}>5</button>
        <button onClick={() => press("6")}>6</button>
        <button onClick={Calc}>=</button>

        <button onClick={() => press("1")}>1</button>
        <button onClick={() => press("2")}>2</button>
        <button onClick={() => press("3")}>3</button>
        <button onClick={() => press("0")}>0</button>
        
      </div>
    </div>
  )
}

export default App