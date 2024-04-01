import React from 'react'
import FormButton from '../FormButton';

const HomeAboutUs = () => {
  return (
    <section className="container">
      <h3 className="vfTitle vfposition">About Us</h3>
      <div className="minicontainer">
        <div className="textcontainer">
          <p className="vfDetails">Welcome to <span className="greenText">AgroWize,</span> the foremost
            source of agricultural knowledge in Africa. Our goal is to lead the
            way in transforming the farming sector by providing comprehensive
            education and training on sustainable agricultural practices.
          </p>
        </div>
        <img
          className="vfImage"
          src="/Vertical Farming2.png"
          alt="Vertical farming"
        />
      </div>
      <div className="minicontainer">
        <img
          className="vfImage"
          src="/Vertical Farming3.png"
          alt="Vertical farming"
        />
        <div className="textcontainer">
          <p className="vfDetails">
            At <span className="coloredText">AgroWize,</span> we are committed to
            advancing agricultural knowledge and promoting the adoption of
            sustainable practices among farmers throughout Africa. Our community
            platform aims to foster a culture of collaboration and knowledge
            exchange that empowers farmers to make informed decisions and drive
            positive change in the agricultural industry.
          </p>
          <FormButton name="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default HomeAboutUs