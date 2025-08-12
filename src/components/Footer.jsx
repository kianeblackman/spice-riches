import logo from "../assets/img/logo.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Spice Riches Logo" className="footer-logo-image" />
                </div>
                <h1 className="footer-heading heading">
                    COMING SOON
                    <span>
                        {" "}
                        <span className="footer-countdown">12</span>{" "}
                        <span className="footer-countdown">03</span>{" "}
                        <span className="footer-countdown">25</span>
                    </span>
                </h1>
                <p className="footer-body-text body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </p>
            </div>
        </div>
    )
}
