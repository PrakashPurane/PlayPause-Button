import { useRef } from "react";
import "./App.css";

function App() {
  const videoRef= useRef();

  const handlePlay=()=>{
    videoRef.current.play();
  }

  const handlePause=()=>{
    videoRef.current.pause();
  }
  
  return <>
  <div className="main-container">
    <video src="/Video.mp4" ref={videoRef}></video>
    <button className="btn" onClick={handlePlay}>Play</button>
    <button className="paused" onClick={handlePause}>Pause</button>
  </div>
  </>;
}

export default App;
