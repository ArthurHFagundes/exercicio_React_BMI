import { useState } from "react";

function Form() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    // função para formatar a altura com ponto decimal //! da pra usar em outras ocasições
    function formatHeight(value) {
        value = value.replace(/\D/g, "");

        if (value.length <= 2) {
            return value;
        }

        const sliceOne = value.slice(0, value.length - 2);
        const sliceTwo = value.slice(value.length - 2);

        return `${sliceOne}.${sliceTwo}`;
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

    return (
        <form>
            <div>
                <label> Weight (kg): </label>
                <input value={weight} onChange={textToNumberWeight} maxLength={3} type="text" placeholder='E.g.: 70 Kg' />
            </div>
            <div>
                <label> Height (m): </label>
                <input value={height} onChange={handleChange} maxLength={4} type="text" placeholder='E.g.: 1.80 m' />
            </div>
        </form>
    )
}

export default Form;