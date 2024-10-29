import { useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  function readQuotes() {
    fetch("../src/Quotes.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }

        return response.json();
      })
      .then((data) => {
        setQuotes(data);

        console.log("Data", data);
        console.log("Quotes", quotes[0].quote);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }

  function Card({ quote, index }) {
    return (
      <div className="min-w-12 aspect-square border-2 border-black p-4 rounded-md bg-red-200 flex items-center text-wrap ">
        {console.log(index, "::", quote)}

        <p>{`${index + 1} - ${quote}`}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="bg-red-500 p-2 text-white text-center">Quotes</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        onClick={() => readQuotes()}
      >
        Load Quotes
      </button>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {quotes.map((quoteObj, index) => (
          <Card key={index} quote={quoteObj.quote} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
