import Navbar from "./Navbar";
import './Homepage.css'
import FileReadWriteComponent from "./FileReadWriteComponent";

function Museum() {
  return (
    <div className="root-home">
      <div className="HomescreenOne">
        <h1 className="homepage-title">Welcome to the Peterson Museum →</h1>
        <a href="/#/VideoCatalog"><div className="explore-button"><h3>Explore</h3></div></a>
      </div>
    </div>
  );
}

export default Museum;
