import "./Homepage.css";
import ButtonBlue from "../components/ButtonBlue";

function Homepage() {
  return (
    <div>
      <div className="left-div">
        <h2>WELCOME TO DRISHTI</h2>
        <img
          src="https://i.ibb.co/xLFrH6J/DRISHTI-leaf-2-1.png"
          alt="logo-leaf"
          className="logo-leaf"
        />
        <h1>Enhance your vision with us</h1>

        <ButtonBlue text="Get Started" />
      </div>
      <div className="front-rect">Meet your Virtual eyes with Drishti.</div>
      <img
        className="front-girl"
        alt="girl"
        src="https://i.ibb.co/pzym1C3/Front-girl.png"
      />
    </div>
  );
}

export default Homepage;
