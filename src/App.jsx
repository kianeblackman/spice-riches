import { useState, useEffect } from "react";
import "./styles/main.scss";

// Importing images
import logo from "./assets/img/logo.png";
import spaceship from "./assets/img/spaceship.png";
import paul from "./assets/img/paul.png";
import chani from "./assets/img/chani.png";
import baron from "./assets/img/baron.png";

const images = [
  { src: paul, alt: "Character Paul", className: "character-slider--image" },
  { src: chani, alt: "Spaceship", className: "character-slider--image" },
  { src: baron, alt: "Logo Character", className: "character-slider--image" },
];

export default function App() {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacter((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentCharacter];

  return (
    <div id="app" className="app-wrapper">
      <div className="sand-texture"></div>
      <div className="header">
        <div className="header--content">
          <div className="header-spaceship">
            <img
              src={spaceship}
              alt="Spice Riches Spaceship"
              className="header-spaceship-img"
            />
          </div>
          <h1 className="header--heading heading">SPIN FOR SPICE</h1>
          <h1 className="header--heading heading">RULE THE DESERT</h1>
        </div>
      </div>
      <div className="character-slider">
        <div className="character-slider-content">
          <div className="character-slider--item">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={currentImage.className}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer--logo">
            <img src={logo} alt="Spice Riches Logo" className="footer--logo-image" />
          </div>
          <h1 className="footer--heading heading">
            COMING SOON
            <span>
              {" "}
              <span className="footer-countdown">12</span>{" "}
              <span className="footer-countdown">03</span>{" "}
              <span className="footer-countdown">25</span>
            </span>
          </h1>
          <p className="footer--body-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}
