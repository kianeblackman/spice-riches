// Importing images
import spaceship from "../assets/img/spaceship.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="header-heading heading">
                    SPIN FOR SPICE &
                    <div className="header-spaceship">
                        <img src={spaceship} alt="Spice Riches Spaceship" className="header-spaceship-img" />
                    </div>
                    <br /> <span className="header-heading--white">RULE THE DESERT!</span>
                </h1>
            </div>
        </div>
    )
}
