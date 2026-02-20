import React, { useState } from "react";
import "./App.css";

const Bmicalc = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight");
      return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult({ bmi, category });
  };

  const reset = () => {
    setResult(null);
    setName("");
    setHeight("");
    setWeight("");
  };

  return (
    <div className="bmi-container">
      <div className="bmi-card">
        {!result ? (
          <form className="bmi-form" onSubmit={handleSubmit}>
            <h1>BMI Calculator</h1>

            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Weight (kg)</label>
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
            <p className="bmi-text">Your BMI is</p>
            <h2>{result.bmi}</h2>
            <p className="category">({result.category})</p>

            <div className="result-box">
              {result.category === "Underweight" && (
                <>
                  <div className="dialogue-bubble">
                    Oi! You gotta eat more 🍖 <br />
                    A pirate can’t fight on an empty stomach! <br />
                    Let’s get stronger together!
                  </div>
                  <div className="image-frame">
                    <img src="/underweight.jpg" alt="Underweight" />
                  </div>
                </>
              )}

              {result.category === "Normal weight" && (
                <>
                  <div className="dialogue-bubble">
                    Hehehe… nice 😄 <br />
                    You’re doing great just like this. <br />
                    Keep going, nakama!
                  </div>
                  <div className="image-frame">
                    <img src="/normal.jpg" alt="Normal weight" />
                  </div>
                </>
              )}

              {result.category === "Overweight" && (
                <>
                  <div className="dialogue-bubble">
                    Hmm… not bad 💪 <br />
                    Let’s move more and eat smart. <br />
                    Slow steps still win!
                  </div>
                  <div className="image-frame">
                    <img src="/overweight.jpg" alt="Overweight" />
                  </div>
                </>
              )}

              {result.category === "Obese" && (
                <>
                  <div className="dialogue-bubble">
                    Listen… you matter ❤️ <br />
                    Take care of yourself, okay? <br />
                    I’ll cheer for you always!
                  </div>
                  <div className="image-frame">
                    <img src="/obesity.jpg" alt="Obese" />
                  </div>
                </>
              )}
            </div>

            <button className="reset-btn" onClick={reset}>
              Calculate Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmicalc;