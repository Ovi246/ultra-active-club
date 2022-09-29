import { useState, useEffect } from "react";

import Card from "../src/components/Card";

function App() {
  const [data, setData] = useState([]);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
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

  const handleAddToList = (time, idx) => {
    setWorkoutTime(workoutTime + time);
  };

  return (
    <div className="">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="container mx-auto px-32 py-28">
            <img
              src="images/logo.jpg"
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
                : data.map((item, idx) => (
                    <Card
                      item={item}
                      key={idx}
                      handleClick={handleAddToList}
                      idx={idx}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="basis-1/4 bg-[#E7F6F2] flex flex-col gap-10 p-10 info sticky h-screen top-0">
          <div className="flex justify-evenly">
            <img src="images/user.jpg" alt="" width="50px" height="50px" />
            <div>
              <h6>Ovi</h6>
              <p>Bashabo,Dhaka</p>
            </div>
          </div>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-evenly">
            <div>
              <p>60kg</p>
              <p>Weight</p>
            </div>
            <div>
              <p>5.5"</p>
              <p>Height</p>
            </div>
            <div>
              <p>23yrs</p>
              <p>Age</p>
            </div>
          </div>
          <h6 className="mt-5">Add Break</h6>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-evenly">
            <p onClick={() => setBreakTime(10)}>10s</p>
            <p onClick={() => setBreakTime(30)}>30s</p>
            <p onClick={() => setBreakTime(20)}>20s</p>
            <p onClick={() => setBreakTime(40)}>40s</p>
            <p onClick={() => setBreakTime(50)}>50s</p>
          </div>
          <h6 className="mt-5">Exercise Details</h6>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-between">
            <span>Total Time</span>
            <span>{workoutTime}</span>
          </div>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-between">
            <span>Break Time</span>
            <span>{breakTime}</span>
          </div>
          <button className="bg-[#395B64] p-5 text-[#E7F6F2] hover:bg-[#A5C9CA] hover:text-[#395B64] mt-5">
            Mark As Complete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
