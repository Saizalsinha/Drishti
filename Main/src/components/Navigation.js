import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./Navigation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Navigation() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const speech = () => {
    setIsListening(!isListening);
    if (isListening) {
      resetTranscript();
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
      console.log(transcript);
      console.log(document.getElementById(transcript));
      if (document.getElementById(transcript)!=null) {
        
        let speech = new SpeechSynthesisUtterance();
        speech.text = "Going to " + transcript + " page";
        window.speechSynthesis.speak(speech);
        // document.getElementsByClassName(transcript)[0].click();
        
      } else{
        let speech = new SpeechSynthesisUtterance();
        speech.text = "No such page found";
        window.speechSynthesis.speak(speech);
      }

      resetTranscript();
    }
  };
  return (
    <header className="nav">
      <img
        onClick={speech}
        className="logo"
        alt="logo"
        src="https://i.ibb.co/5G7ZRqg/Logo-cropped.png"
      />

      <nav>
        <ul>
          <li id="vision">
            <Link to="/Vision">Vision</Link>
          </li>
          <li>
            {/* <Link to="/Virtual-eye/Face-recognition">Maps</Link> */}
            <a href="http://localhost:3001/">Maps</a>
          </li>
          <li>
            <Link to="/">Eye Care</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <Link id="object" to="/Vision/Object-recognition"></Link>
        <a id="face" href="http://localhost:3001/"></a>
      </nav>
    </header>
  );
}

export default Navigation;

// Full Logo link
// <img
//           className="logo"
//           alt="logo"
//           src="https://i.ibb.co/XYTqVP8/DRISHTI-Logo.png"
//         />

// Cropped logo link
// <a href="https://ibb.co/xX4Z7Vt"><img src="https://i.ibb.co/5G7ZRqg/Logo-cropped.png" alt="Logo-cropped" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>rob zombie cd review</a><br />
