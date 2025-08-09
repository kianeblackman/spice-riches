import "./styles/main.scss"
import logo from "./assets/img/logo.png"

export default function App() {
  return (
    <div id="app" className="app-wrapper">
      <div className="sand-texture"></div>
      <div className="header">
        <div className="header--content">
          <h1 className="header--heading heading">SPIN FOR SPICE</h1>
          <h1 className="header--heading heading">RULE THE DESERT</h1>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer--logo">
            <img src={logo} alt="Spice Riches Logo" className="footer--logo-image" />
          </div>
          <h1 className="footer--heading heading">COMING SOON<span> <span className="footer-countdown">12</span> <span className="footer-countdown">03</span> <span className="footer-countdown">25</span></span></h1>
          <p className="footer--body-text body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
      </div>
    </div>
  )
}
