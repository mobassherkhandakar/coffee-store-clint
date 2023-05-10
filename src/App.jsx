import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { useState } from "react";
import CaffeCard from "./components/Banner/CaffeCard/CaffeCard";

function App() {
  const loadCaffee = useLoaderData();
  const [caffees, setCaffees] = useState(loadCaffee);
  return (
    <>
      <Header />
      <Banner />

      <div>
        <h1 className="text-6xl text-center text-purple-500">
          Hot Cold Coffee: {caffees.length}
          <div>
          <Link to='/addcaffee'><button className="text-3xl ">Add Cafee</button></Link>
          </div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-2 p-24  gap-4">
          {
            caffees.map(caffee=> <CaffeCard setCaffees={setCaffees} caffees={caffees} caffee={caffee} key={caffee._id}/>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
