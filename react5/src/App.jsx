import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Card({ item }) {
  return (
    <div>
      <img src={item.download_url} alt="" />
      {console.log(item.download_url)}
    </div>
  );
}
function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        const data = response;
        setApiData(data.data);
        // console.log("API DATA ::", data.data[0].download_url);
        console.log("API DATA ::", apiData[0]);
      })
      .catch((error) => {
        console.log("ERROR :: API ", error.message);
      });
  }, []);

  return (
    <div>
      <div className="bg-gray-800 text-white text-2xl p-2">
        <h1>Image Gallery</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 pt-2 2 md:grid-cols-2 xl:grid-cols-3 ">
        {apiData.length > 0 && apiData.map((item) => <Card item={item} />)}
      </div>
    </div>
  );
}

export default App;
