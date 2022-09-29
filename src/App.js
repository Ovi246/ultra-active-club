import { useState, useEffect } from "react";
import logo from "../src/images/logo.jpg";
import Card from "../src/components/Card";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    setLoading(true);
    fetchData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="container mx-auto px-32 py-28">
            <img
              src={logo}
              alt=""
              width="70px"
              height="70px"
              className="inline"
            />
            <h3 className="text-3xl font-bold inline">
              Zero to Hero Fitness Club
            </h3>
            <h2 className="text-xl font-semibold py-5">
              Choose your appropriate exercise
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {loading
                ? "loading"
                : data.map((item, idx) => <Card item={item} key={idx} />)}
            </div>
          </div>
        </div>
        <div className="basis-1/4">info</div>
      </div>
    </div>
  );
}

export default App;
