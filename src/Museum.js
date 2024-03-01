import Navbar from "./Navbar";
import './Homepage.css'
import FileReadWriteComponent from "./FileReadWriteComponent";

function Museum() {
  return (
    <div className="root">
      <div className="HomescreenOne">
        <h1>Welcome to the Peterson Museum →</h1>
        <a href="/"><div className="explore-button"><h3>Explore</h3></div></a>
      </div>
    </div>
  );
}

export default Museum;
