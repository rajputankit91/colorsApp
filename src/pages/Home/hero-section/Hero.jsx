import React from "react";
import "./Hero.css";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-container-left">
            <h1>
              The super fast <br /> color palettes <br /> generator!
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sint, praesentium dolorem ullam incidunt obcaecati recusandae esse
              id officia veritatis vero voluptas modi cupiditate qui natus, cum
              explicabo velit numquam. Quae saepe numquam.
            </p>
            <div className="hero-span">
              <span
                className="hero-span-1"
                onClick={() => navigate("/Generator")}
              >
                <a href="#">Start the generator!</a>
              </span>
              <span className="hero-span-2" onClick={() => navigate("/Palettes")}>
                <a href="#">Explore trending palettes</a>
              </span>
            </div>
          </div>
          <div className="hero-container-right">
            <img
              src="https://i.pinimg.com/736x/c1/40/76/c14076803d2ee05a3001c67f020a12a9.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="hero-boxes">
          <div className="hero-box">
            <div className="hero-icon">
              <FaApple />
            </div>
            <h2>ios App</h2>
            <p>Create, browse and save palettes on the go.</p>
          </div>
          <div className="hero-box">
            <div className="hero-icon">
              <FaApple />
            </div>
            <h2>ios App</h2>
            <p>Create, browse and save palettes on the go.</p>
          </div>
          <div className="hero-box">
            <div className="hero-icon">
              <FaApple />
            </div>
            <h2>ios App</h2>
            <p>Create, browse and save palettes on the go.</p>
          </div>
          <div className="hero-box">
            <div className="hero-icon">
              <FaApple />
            </div>
            <h2>ios App</h2>
            <p>Create, browse and save palettes on the go.</p>
          </div>
          <div className="hero-box">
            <div className="hero-icon">
              <FaApple />
            </div>
            <h2>ios App</h2>
            <p>Create, browse and save palettes on the go.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
