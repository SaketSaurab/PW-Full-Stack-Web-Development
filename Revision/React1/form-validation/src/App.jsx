import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState({});

  const validForm = () => {
    let newError = {};
    if (name.trim() === "") {
      newError.name = "Name is required";
    }
    if (email.trim() === "") {
      newError.email = "Enter email id";
    } else if (!email.includes("@")) {
      newError.email = "Enter valid email id";
    }
    if (password.length < 8) {
      newError.password = "Password must be atleast 8 character";
    }
    setErrMessage(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm()) {
      alert("Form submitted Successfully !");
    }
  };

  return (
    <>
      <div className="container-div">
        <div className="card-div">
          <div className="title-div">Form Validation</div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errMessage.name && <p className="error">{errMessage.name}</p>}
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errMessage.email && <p className="error">{errMessage.email}</p>}
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errMessage.password && (
              <p className="error">{errMessage.password}</p>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
