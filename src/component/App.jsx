import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [steps, setSteps] = useState(1);

  function handleNext() {
    if (steps >= 3) return;
    setSteps((steps) => steps + 1);
  }

  function handlePrev() {
    if (steps <= 1) return;
    setSteps((steps) => steps - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : "num"}>1</div>
        <div className={steps >= 2 ? "active" : "num"}>2</div>
        <div className={steps >= 3 ? "active" : "num"}>3</div>
      </div>
      <Message steps={steps} />
      <div className="btn">
        <Button onClick={handlePrev}>👈 Prev</Button>
        <Button onClick={handleNext}>Next 👉</Button>
      </div>
    </div>
  );
}

function Message({ steps }) {
  return (
    <div className="message">
      <p>{messages[steps - 1]}</p>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
