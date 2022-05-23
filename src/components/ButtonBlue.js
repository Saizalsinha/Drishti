
import { Link } from "react-router-dom";
import "./ButtonBlue.css"

function ButtonBlue(props) {

  return (
    <div>
      <Link to="/Virtual-eye">
        <button className="blue-b">
        <h4 >{props.text}</h4>
        <img className="arrow-wh"  src="https://i.ibb.co/85ZcXp0/akar-icons-arrow-right-1.png" alt="right-arrow" />
        </button>
      </Link>
    </div>
  );
}

export default ButtonBlue;
