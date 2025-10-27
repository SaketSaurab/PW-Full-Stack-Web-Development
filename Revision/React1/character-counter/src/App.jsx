import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setinputText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const textLenght = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const readingTime = Math.ceil(wordCount / 100);

  const toUpperCase = () => setinputText(inputText.toUpperCase());
  const toLowerCase = () => setinputText(inputText.toLowerCase());
  const clear = () => setinputText("");
  const removeExtraSpace = () => {
    setinputText(inputText.replace(/\s+/g, " ").trim());
  };

  const copy = () => {
    navigator.clipboard.writeText(inputText);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };
  return (
    <>
      <div className="container-div">
        <textarea
          className="text-area"
          rows={8}
          placeholder="enter text "
          type="text"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
        />

        <div>
          <p>The lenght of the string is : {textLenght} </p>
          <p>Word count : {wordCount}</p>
          <p>Reading time : {readingTime} minutes</p>
        </div>
        <div className="button-div">
          <button onClick={toUpperCase} disabled={!inputText}>
            toUpperCase
          </button>
          <button onClick={toLowerCase} disabled={!inputText}>
            Lower Case
          </button>
          <button onClick={removeExtraSpace} disabled={!inputText}>
            Remove spaces
          </button>
          <button onClick={copy} disabled={!inputText}>
            Copy
          </button>
          <button onClick={clear} disabled={!inputText}>
            Clear
          </button>
        </div>
        <div>
          {showToast && <div className="toast">copied to clipboard</div>}
        </div>
      </div>
    </>
  );
}

export default App;
