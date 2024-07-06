import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <h1 className="text-8xl font-bold underline">Hello Nikhil.</h1> */}
      <nav>Site logo</nav>
      <Outlet />
    </>
  );
}

export default App;
