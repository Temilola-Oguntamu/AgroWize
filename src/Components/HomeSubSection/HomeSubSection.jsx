import React from 'react'
import "./HomeSubSection.css"

const HomeSubSection = () => {
  return (
    <div>
      <section className="subsectioncontainer container">
        <div className="minicontainer">
          <div className="textcontainer">
            <h3>Hydroponic Farming</h3>
            <p className="vfDetails2 vfDetails">
              <span className='blackText'>Hydroponic farming,</span>
              also known as hydro farming, is a cutting-edge agricultural method
              that is rapidly transforming the way we grow crops. Unlike
              traditional soil-based farming, hydroponics utilizes a water-based
              nutrient solution to nourish plants, eliminating the need for soil
              altogether.
            </p>
          </div>
          <img
            className="vfImage"
            src="/Vertical Farming1.png"
            alt="Vertical farming"
          />
        </div>
      </section>
    </div>
  );
}

export default HomeSubSection