import PatPic from './PatrickEyes.png';
import "./VideoCatalogItem.css";

const VideoCatalogItem = (props) => {

  const title = props.title;
  const description = props.description;
  const link = props.link;
  const thumbnail = props.thumbnail;

  return (
    <div className="video-catalog-item">
      <div className="image">
        <img src={thumbnail} />
      </div>
      <div className="title">
      <h3>{title}</h3>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoCatalogItem;