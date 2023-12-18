import PatPic from './PatrickEyes.png';
import "./MuseumVideos.css";

function VideoItem() {

    return (
      <div className="video-item">
            <img src={PatPic} />
            <p>Video title</p>
      </div>
    );
  }
  
  export default VideoItem;