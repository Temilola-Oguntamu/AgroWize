import React from "react";
import "./Home.css";
import FormButton from "../FormButton";

const Home = () => {
  return (
    <section className="container">
      <div className="minicontainer">
        <img
          className="vfImage"
          src="/Vertical Farming.png"
          alt="Vertical farming"
        />
        <div className="textcontainer">
          <h3 className="vfTitle">Welcome to the Future of Agriculture</h3>
          <p className="vfDetails">
            <span className="coloredText">
              Unlocking Agricultural Innovation: 
             </span>
            Vertical farming utilizes cutting-edge technology to grow crops in
            stacked layers, conserving space, water, and resources, while
            ensuring a brighter, greener future for food production.
          </p>
          <FormButton name="Explore" />
        </div>
      </div>
    </section>
  );
};

export default Home;
