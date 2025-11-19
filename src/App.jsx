import { useState } from 'react';
import style from './App.module.css';

import './App.css';

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

   //todo result/ ~~>

  const [bmindex, setBmi] = useState(); 

  const calculateBmi = (event) => { 
    event.preventDefault();
    if (height > 0) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
    }
    if (height == undefined || weight == undefined) {
      alert("Please enter valid Numbers for weight and height.");
    }
    if (height == 0 || weight == 0) {
      alert("Weight and height must be greater than Zero.");
    }
  };

   //todo result/ <~~

   //todo form/ ~~>

  // função para formatar a altura com ponto decimal //! da pra usar em outras ocasições
    function formatHeight(value) {
      value = value.replace(/\D/g, "");

      if (value.length <= 2) {
        return value;
      }

      const sliceOne = value.slice(0, value.length - 2); 
      const sliceTwo = value.slice(value.length - 2);

      return `${sliceOne}.${sliceTwo}`; //todo <-- o problema era um vírgula ao invés de ponto
    }

  const handleChange = (e) => {
    const preValue = e.target.value;
    const posValue = formatHeight(preValue);
    setHeight(posValue);
  };

  // função para formatar o peso de string para number (já que o type=number não aceita maxLength)  //! da pra usar em outras ocasições
  const textToNumberWeight = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setWeight(onlyNumbers);
  }

   //todo form/ <~~

  const getBmiClass = () => {
    if (bmindex > 0 && bmindex < 18.5) return style.underWeight;
    if (bmindex >= 18.5 && bmindex < 24.9)  return style.normalWeight;
    if (bmindex >= 25 && bmindex < 29.9)  return style.overWeight;
    if (bmindex >= 30)  return style.obesityRange;
  };


  return (

    <>
      <div>
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label> Weight (kg): </label>
            <input className={style.inputs}  value={weight} onChange={textToNumberWeight} maxLength={3} type="text" placeholder='E.g.: 70 Kg'/>
          </div>
          <div>
            <label> Height (m): </label>
            <input className={style.inputs} value={height} onChange={handleChange} maxLength={4} type="text" placeholder='E.g.: 1.80 m'/>
          </div>
          <button className={style.buttonSubmit} onClick={calculateBmi} type="submit">Compute!</button>
        </form>
        <div className={getBmiClass()}>
          {bmindex && <h3>Your BMI is: {bmindex}</h3>}
          {bmindex > 0 && bmindex < 18.5 && <p>You are underweight.</p>}
          {bmindex >= 18.5 && bmindex <= 24.9 && <p>You have a normal weight.</p>}
          {bmindex >= 25 && bmindex < 29.9 && <p>You are overweight.</p>}
          {bmindex >= 30 && <p>You are in the obesity range.</p>}
        </div>
      </div>
    </>
  )
}

export default App
