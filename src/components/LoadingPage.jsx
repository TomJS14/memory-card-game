/** @format */
import "../styles/loadingFace.css";
import loadingFace from "../assets/loadingFace.gif";

function LoadingFace() {
  return (
    <div className="loadingContainer">
      <img className="loadingFace" src={loadingFace} alt="Rick and Morty" />
      <p className="loadingText">And awaaaaay, we go...</p>
    </div>
  );
}

export default LoadingFace;
