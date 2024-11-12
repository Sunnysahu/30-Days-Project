import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 rounded-lg flex items-center justify-center p-4 m-4 hover:cursor-pointer">
        Hello Sunny
      </h1>
    </>
  );
}

export default App;
