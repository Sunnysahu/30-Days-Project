import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-red-400 w-min ml-32">Hello World</h1>
    </div>
  );
}

export default App;
