import Navbar from "./Navbar";
import "./MuseumVideos.css";
import TestVideo from './TestVideo.mp4';

function MuseumVideos() {
  return (
    <div className="root">
      <Navbar />

      <div>
        <div className="video-main">

          <div className="video-container">
            <video>
              <source src={TestVideo} />
              Your browser does not support the video tag.
              <div className="video-elements">
                <h1>This is a test</h1>
              </div>
            </video>
            <h1>This is a test</h1>
          </div>

          <div className="up-next">
            <div className="up-next-title">Up Next</div>
            <div className="video-list">
              <div className="video-thumbnail">
                <img src="logo.svg" alt="Video Thumbnail" />
                <div className="video-info">
                  <div className="video-title">Video Title</div>
                  <div className="video-duration">3:10</div>
                </div>
              </div>
              <div className="video-thumbnail">
                <img src="logo.svg" alt="Video Thumbnail" />
                <div className="video-info">
                  <div className="video-title">Video Title</div>
                  <div className="video-duration">4:25</div>
                </div>
              </div>
              {/* Add more video thumbnails as needed */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MuseumVideos;



