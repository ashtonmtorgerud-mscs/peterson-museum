import PatPic from './PatrickEyes.png';
import "./Thumbnail.css";

const VideoItem = (props) => {

  const title = props.title;
  const description = props.description;
  const link = props.link;

  return (
    <div className="video-item">
      <div className="image-half">
        <img src={PatPic} />
      </div>
      <div className="title-corner">
      <h3>{title}</h3>
      </div>
      <div className="description-corner">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoItem;