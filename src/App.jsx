import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
