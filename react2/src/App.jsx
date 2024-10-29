import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prev) => (prev -= 1));
  }

  function increment() {
    setCount((prev) => (prev += 1));
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="flex flex-col items-center bg-green-400">
        <div>
          <h2 className="bg-gray-900 text-white text-2xl w-48 rounded-md my-5">
            Clicker
          </h2>
        </div>
        <div className="">
          <div className="h-40 border border-black rounded-md w-40 text-center content-center my-5">
            <h1 className="text-3xl text-black">{count}</h1>
          </div>
        </div>
        <div>
          <div className="flex flex-row ">
            <button
              className="h-14 w-14 bg-green-600 text-center content-center justify-items-center"
              onClick={increment}
            >
              <FaPlus className="m-5" />
            </button>
            <button
              className="h-14 w-14 bg-yellow-600 text-center content-center justify-items-center"
              onClick={reset}
            >
              <VscDebugRestart className="m-5" />
            </button>
            <button
              className="h-14 w-14 bg-red-600 text-center content-center justify-items-center"
              onClick={decrement}
            >
              <FaMinus className="m-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
