import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Card({ item }) {
  return (
    <div>
      <div className="grid grid-cols-2 text-white text-3xl ">
        <div className="">
          <div className="bg-gray-800 ">Userlist</div>
          <div className="pt-0 p-4 bg-white">
            <div className="bg-gray-200 p-5 text-2xl text-black border-gray-500 border border-t-0">
              User : {item.login.username}
            </div>
            <div className="grid grid-cols-2 border-gray-500 border border-t-0 rounded-b-lg ">
              <div className="text-sm flex pl-2 flex-col items-start gap-2 md:text-xs">
                <div className="text-white ">{item.name.first}</div>
                <div className="break-all">Email : {item.email}</div>
                <div className="text-sm items-start flex flex-col">
                  <h1 className="text-md font-bold">{`User for ${item.registered.age} years`}</h1>
                  <h1 className="">{`Age:  ${item.dob.age}`}</h1>
                  <h1 className="">{`Nationality:  ${item.nat}`}</h1>
                  <h1 className="">{`Phone :  ${item.phone}`}</h1>
                </div>
              </div>
              <p className="text-2xl">
                <img src={item.picture.large} alt="" srcset="" />
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        const data = response.data.results;
        console.log("Data ::", data);
        setCount(data);
      })
      .catch((err) => console.log("Error is API :: API", err));
  }, []);
  // console.log("COUNT ::", count);
  // console.log("COUNT ::", count[0].id);
  // console.log("COUNT ::", count[0].id.name);

  return (
    <section className="grid grid-cols-2 gap-5">
      {count.length > 0 &&
        count.map((item) => <Card item={item} key={item.id.value} />)}
    </section>
  );
}

export default App;
