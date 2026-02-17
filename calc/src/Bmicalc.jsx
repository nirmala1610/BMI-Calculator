import React, { useState } from 'react';
import './App.css';

const Bmicalc = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (height > 0 && weight > 0) {
            const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
            
            let cat = "";
            if (bmiValue < 18.5) cat = "Underweight";
            else if (bmiValue < 25) cat = "Normal weight";
            else if (bmiValue < 30) cat = "Overweight";
            else cat = "Obese";

            setResult({ bmi: bmiValue, category: cat });
        }
    };

    const reset = () => {
        setResult(null);
        setHeight('');
        setWeight('');
    };

    return (
        <div className="bmi-container">
            <div className="bmi-card">
                {!result ? (
                    <form className="bmi-form" onSubmit={handleSubmit}>
                        <h1>BMI Calculator</h1>
                        <div className="input-group">
                            <label>Height (cm):</label>
                            <input 
                                type="number" 
                                value={height} 
                                onChange={(e) => setHeight(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Weight (kg):</label>
                            <input 
                                type="number" 
                                value={weight} 
                                onChange={(e) => setWeight(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit">Calculate BMI</button>
                    </form>
                ) : (
                    <div className="result-display">
                        <h1>Your Result</h1>
                        <p>Your BMI is</p>
                        <h2>{result.bmi}</h2>
                        <p className="category">({result.category})</p>
                        <button className="reset-btn" onClick={reset}>Calculate Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bmicalc;
