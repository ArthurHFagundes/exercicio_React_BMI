import App from '../../App.jsx';

function Result() {
    return (
        <>
            <div>
                {App.bmindex && <h3>Your BMI is: {App.bmindex}</h3>} 
                {App.bmindex > 0 && App.bmindex < 18.5 && <p>You are underweight.</p>}
                {App.bmindex >= 18.5 && App.bmindex < 24.9 && <p>You have a normal weight.</p>}
                {App.bmindex >= 25 && App.bmindex < 29.9 && <p>You are overweight.</p>}
                {App.bmindex >= 30 && <p>You are in the obesity range.</p>}
            </div>
        </>
    )
}

export default Result;