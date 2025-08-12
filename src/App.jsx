// Importing components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CharacterSlider from "./components/CharacterSlider.jsx";

// Importing styles
import "./styles/main.scss";

export default function App() {
  return (
    <div id="app" className="app-wrapper">
      <div className="sand-texture"></div>
      <Header />
      <CharacterSlider />
      <Footer />
    </div>
  );
}
