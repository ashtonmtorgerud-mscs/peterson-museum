import PatPic from './PatrickEyes.png';
import "./Thumbnail.css";

const VideoItem = (props) => {

  const title = props.title;
  const description = props.description;
  const link = props.link;
  const image = props.image;
  const backgroundProp = props.background;

  return (
    <a><div className="video-item">
      <div style={{background: backgroundProp}} className="image-half">
        <img src={image} />
      </div>
      <div className="title-corner">
      <h3>{title + ""}</h3>
      </div>
      <div className="description-corner">
        <p>{description}</p>
      </div>
    </div></a>
  );
}

export default VideoItem;