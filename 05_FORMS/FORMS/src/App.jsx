import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState('ramon');
  const [email, setEmail] = useState('ramon@gmail.com');
  const handleName = (e) => {
    // setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Forms</h1>
        <div>
          <label>
            <span>Nome:</span>
            {/* <input onChange={handleName} type="text" name="nome"/> */}
            <input
              value={name}
              type="text"
              name="nome"
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              value={email}
              type="email"
              name="email"
            />
          </label>
          <button>Send</button>
        </div>
      </form>
    </>
  );
}

export default App;
