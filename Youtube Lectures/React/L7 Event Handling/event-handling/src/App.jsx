import "./App.css";

function App() {
  function handleClick() {
    alert("You clicked on button");
  }
  function handleMouseOver() {
    alert("Para ke upar mouse lekar aaye ho");
  }

  function handleInputChange(e) {
    console.log("Input value change to : ", e.target.value);
  }

  function handleSubmit() {
    alert("Form submit kar diya");
  }
  return (
    <div className="container-div">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter the text"
          type="text"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {/* <p
        onMouseOver={handleMouseOver}
        style={{ border: "1px solid black", padding: "5px", color: "Red" }}
      >
        This is paragraph text.
      </p>
      <button onClick={handleClick}> click me</button> */}
    </div>
  );
}

export default App;
