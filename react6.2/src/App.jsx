import { useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [quote, setquote] = useState(0);

  const quoteHandler = () => {
    fetch("http://localhost:3000/api/quotes")
      .then((resposne) => {
        return resposne.json();
      })
      .then((res) => {
        console.log(res);

        setquote(res.quote);
      });
  };

  return (
    <>
      <p className="bg-red-300">Sunny</p>
      <button type="button" onClick={quoteHandler}>
        Click Here
      </button>

      <p>{quote}</p>
    </>
  );
}

export default App;
