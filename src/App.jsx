import { useState } from "react";

import Form from './components/Form';
import Result from './components/Result';

import './App.css';

function App() {
    const [bmindex, setBmi] = useState();

    const calculateBmi = (event) => { //! <--- verificar
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
        <Form />
        <button onClick={calculateBmi} type="submit">Compute!</button>
        <Result bmindex={bmindex} />
      </div>
    </>
  )
}

export default App
