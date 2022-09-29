import logo from "../src/images/logo.jpg";

function App() {
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
            <h3 className="text-3xl font-bold text-blue-700 inline">
              Zero to Hero Fitness Club
            </h3>
            <h2 className="text-xl font-semibold text-blue-700 py-5">
              Choose your appropriate exercise
            </h2>
          </div>
        </div>
        <div className="basis-1/4">info</div>
      </div>
    </div>
  );
}

export default App;
