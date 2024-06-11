import React from "react";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Development from "./components/Development";
import ERP from "./components/ERP";
import Design from "./components/Design";
import Optimization from "./components/Optimization";

const App = () => {
  return (
    <>
      <div className="w-full m-auto">
        <div className="w-[1150px] m-auto">
          <Navbar />
          <Hero />
          <Services />
        </div>
        <Team />
        <div className="w-[1150px]  m-auto">
          <Development />
        </div>
        <ERP />
        <div className="w-[1150px]  m-auto">
          <Design />
        </div>
        <Optimization />
      </div>
    </>
  );
};

export default App;
