import { useState } from "react";
import "./app.css";

function App() {
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (note.trim() === "") return;
    setData([...data, note]);
    setNote("");
  };
  const deleteNote = (index) => {
    const updatedNote = data.filter((_, i) => i !== index);
    setData(updatedNote);
  };
  return (
    <>
      <div>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter text here"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={addData}>Add text</button>
        </div>
        <div className="output-div">
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteNote(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
