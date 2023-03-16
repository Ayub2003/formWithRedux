import { useState } from "react";

import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        padding: "15px",
        backgroundColor: "#F1FFFF",
        borderRadius: "5px",
      }}
    >
      <Form />
    </div>
  );
}

export default App;
