import "./VideoCatalog.css";
import VideoItem from './VideoItem';

function VideoCatalog() {
  return (
    <div>
      <div className="barrier"> </div>
      <div className="up-next-videos">
                  <ul class="thumbnail-list">
                    <li>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                    </li>

                  </ul>
          </div>
    </div>
  )
}
  
export default VideoCatalog;

