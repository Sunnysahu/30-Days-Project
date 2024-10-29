import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date, setDate]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl text-white">Digital Clock</p>

      <div className=" text-3xl py-4 px-14 my-6 border-green-400 shadow text-green-400 rounded-lg border-8">
        {date.getHours()} {": "}
        {date.getMinutes()} {": "}
        {date.getSeconds()}
      </div>
    </div>
  );
}

export default App;
