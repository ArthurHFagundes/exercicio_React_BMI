import { useState } from 'react';
import Form from './components/Form';

import './App.css';

function App() {
  const [bmindex, setBmi] = useState(); 

  const calculateBmi = (event) => { 
    event.preventDefault();
    if (Form.height > 0) {
      const bmiValue = (Form.weight / (Form.height * Form.height)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <>
      <div>
        <h1>BMI Calculator</h1>
        <Form/>
        <button onClick={calculateBmi} type="submit">Compute!</button>
        <div >
          {bmindex && <h3>Your BMI is: {bmindex}</h3>}
          {bmindex > 0 && bmindex < 18.5 && <p>You are underweight.</p>}
          {bmindex >= 18.5 && bmindex < 24.9 && <p>You have a normal weight.</p>}
          {bmindex >= 25 && bmindex < 29.9 && <p>You are overweight.</p>}
          {bmindex >= 30 && <p>You are in the obesity range.</p>}
        </div>
      </div>
    </>
  )
}

export default App
