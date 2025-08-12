// Imorting Dependencies
import { useState, useEffect } from "react";

// Importing images
import paul from "../assets/img/paul.png";
import chani from "../assets/img/chani.png";
import baron from "../assets/img/baron.png";

const images = [
    { src: paul, alt: "Character Paul", className: "character-slider-image" },
    { src: chani, alt: "Character Chani", className: "character-slider-image" },
    { src: baron, alt: "Character Baron", className: "character-slider-image" },
];

export default function CharacterSlider() {
    const [currentCharacter, setCurrentCharacter] = useState(0);

    useEffect(() => {
        const interval = setInterval(function () {
            setCurrentCharacter(function (prevIndex) {
                const nextIndex = prevIndex + 1;
                if (nextIndex === images.length) {
                    return 0;
                } else {
                    return nextIndex;
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentImage = images[currentCharacter];

    return (
        <div className="character-slider">
            <div className="character-slider-content">
                <div className="character-slider-item">
                    <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className={currentImage.className}
                    />
                </div>
            </div>
        </div>
    )
}
