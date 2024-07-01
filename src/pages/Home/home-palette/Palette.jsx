import React from "react";
import "./Palette.css";

function Palette() {
  return (
    <div className="Palette">
      <div className="Palette-section">
        <h2>How does it work</h2>
        <div className="Palette-container">
          <div className="Palette-box">
            <div className="Palette-box-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GUp8Bke3lcFf4fYwsHQD9CqxwJ1YxCH1dA&s"
                alt="img"
              />
            </div>
            <div className="Palette-box-content">
              <h3>
                <span>1.</span> Lorem ipsum dolor.
              </h3>
              <p>
                Lorem ipsum dolor amet consectetur adipisicing elit. Unde
                quisquam enim nam illum adipisci iusto dicta quaerat odio.
              </p>
            </div>
          </div>
          <div className="Palette-box">
            <div className="Palette-box-content content">
              <h3>
                <span>2.</span> Lorem ipsum dolor.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia placeat error magnam sunt, eaque porro perspiciatis a,
                quo dolore molestiae, eius quasi cumque. Magnam, qui. Ipsa
                aperiam cumque iste ipsam consequuntur.
              </p>
            </div>
            <div className="Palette-box-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHlKzm9IPDxtRye7vY4WOE0BXpLNwbJ5JhA&s"
                alt="img"
              />
            </div>
          </div>
          <div className="Palette-box">
            <div className="Palette-box-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_a89d2_-rSUOgaHwAQJnOUefjX8nOoZFTuQ&s"
                alt="img"
              />
            </div>
            <div className="Palette-box-content">
              <h3>
                <span>3.</span> Lorem ipsum dolor.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vero, rem blanditiis autem atque quidem unde ea iure dignissimos
                nostrum a ab impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Palette;
