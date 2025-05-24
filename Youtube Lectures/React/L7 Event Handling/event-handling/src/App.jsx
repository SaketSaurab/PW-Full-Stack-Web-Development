import "./App.css";

function App() {
  function handleClick() {
    alert("You clicked on button");
  }
  return (
    <div className="container-div">
      <button onClick={handleClick}> click me</button>
    </div>
  );
}

export default App;
