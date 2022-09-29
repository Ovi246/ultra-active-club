import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "../src/components/Card";
import Questions from "../src/components/Questions";

function App() {
  const [data, setData] = useState([]);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
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

  useEffect(() => {
    const breakTimeExist = localStorage.getItem("break-time");
    if (breakTimeExist) {
      setBreakTime(localStorage.getItem("break-time"));
    }
  }, []);

  const handleAddToList = (e, time) => {
    if (e.target.innerText === "Add Workout") {
      e.target.innerText = "Remove";
      setWorkoutTime(workoutTime + time);
    } else {
      e.target.innerText = "Add Workout";
      setWorkoutTime(workoutTime - time);
    }
  };

  const showToastMessage = () => {
    toast.success("Congratulations on Complete !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleBreakTime = (e, time) => {
    removeClass();
    e.currentTarget.classList.add("selected");
    setBreakTime(time);
    localStorage.setItem("break-time", time);
  };

  function removeClass() {
    let elements = document.querySelectorAll(".break-time");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selected");
    }
  }

  return (
    <div className="">
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="container mx-auto px-5 py-20 md:px-32 md:py-28">
            <img
              src="images/logo.jpg"
              alt=""
              className="inline w-5 h-5 md:w-16 md:h-16"
            />
            <h3 className="text-xl md:text-3xl font-bold md:inline">
              Zero to Hero Fitness Club
            </h3>
            <h2 className="text-md md:text-xl font-semibold py-5">
              Choose your appropriate exercise
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 mb-5">
              {loading
                ? "loading"
                : data.map((item, idx) => (
                    <Card
                      item={item}
                      key={idx}
                      handleClick={handleAddToList}
                      isClicked={isClicked}
                    />
                  ))}
            </div>
            <Questions />
          </div>
        </div>
        <div className="basis-1/4 bg-[#E7F6F2] flex flex-col gap-2 md:gap-10 p-2 md:p-10 info sticky h-screen top-0">
          <div className="flex justify-evenly">
            <img src="images/user.jpg" alt="" width="50px" height="50px" />
            <div>
              <h6>Ovi</h6>
              <p>Bashabo,Dhaka</p>
            </div>
          </div>
          <div className="bg-[#A5C9CA] p-2 md:p-4 rounded-md flex justify-evenly items-center">
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
          <div className="bg-[#A5C9CA] p-2 md:p-4 rounded-md flex justify-evenly break-time">
            <p
              onClick={(e) => handleBreakTime(e, 10)}
              className="cursor-pointer break-time"
            >
              10s
            </p>
            <p
              onClick={(e) => handleBreakTime(e, 30)}
              className="cursor-pointer break-time"
            >
              30s
            </p>
            <p
              onClick={(e) => handleBreakTime(e, 20)}
              className="cursor-pointer break-time"
            >
              20s
            </p>
            <p
              onClick={(e) => handleBreakTime(e, 40)}
              className="cursor-pointer break-time"
            >
              40s
            </p>
            <p
              onClick={(e) => handleBreakTime(e, 50)}
              className="cursor-pointer break-time"
            >
              50s
            </p>
          </div>
          <h6 className="mt-5">Exercise Details</h6>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-between">
            <span>Total Workout Time</span>
            <span>{workoutTime}</span>
          </div>
          <div className="bg-[#A5C9CA] p-4 rounded-md flex justify-between">
            <span>Break Time</span>
            <span>{breakTime}</span>
          </div>
          <button
            className="bg-[#395B64] p-2 md:p-5 text-[#E7F6F2] hover:bg-[#A5C9CA] hover:text-[#395B64] mt-5"
            onClick={showToastMessage}
          >
            Mark As Complete
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
