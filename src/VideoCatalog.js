import "./VideoCatalog.css";
import VideoCatalogItem from './VideoCatalogItem';
import image1 from './Videos/Thumbnail1.png';
import image2 from './Videos/Thumbnail2.png';
import image3 from './Videos/Thumbnail3.png';
import image4 from './Videos/Thumbnail4.png';
import image5 from './Videos/Thumbnail5.png';
import image6 from './Videos/Thumbnail6.png';
import image7 from './Videos/Thumbnail7.png';
import image8 from './Videos/Thumbnail8.png';
import image9 from './Videos/Thumbnail9.png';
import image10 from './Videos/Thumbnail10.png';
import image11 from './Videos/Thumbnail11.png';
import image12 from './Videos/Thumbnail12.png';
import image13 from './Videos/Thumbnail13.png';
import image14 from './Videos/Thumbnail14.png';
import image15 from './Videos/Thumbnail15.png';

function VideoCatalog() {


  let firstthumbnail = image1;


  return (
    <div>
      <div className="barrier"> </div>

      <div className="introParagraph">
        <h2>Videos</h2>
        <p>Here you can find the best collection of videos by Gail Boyum and John Dar. Watch them speak about everything antique from pillows to medals and more</p>

        <div className="gap"></div>
      </div>


      <div className="up-next-videos">
        <ul class="videos-list">
          <li>
            <a href="/#/MuseumVideos/1"> <VideoCatalogItem thumbnail={image1} title='Museum Vid 1' description='Museum Vid 1 Description' /></a>
            <a href="/#/MuseumVideos/2"> <VideoCatalogItem thumbnail={image2} title='Museum Vid 2' description='Museum Vid 2 Description' /></a>
            <a href="/#/MuseumVideos/3"> <VideoCatalogItem thumbnail={image3} title='Museum Vid 3' description='Museum Vid 3 Description' /></a>
            <a href="/#/MuseumVideos/4"> <VideoCatalogItem thumbnail={image4} title='Museum Vid 4' description='Museum Vid 4 Description' /></a>
            <a href="/#/MuseumVideos/5"> <VideoCatalogItem thumbnail={image5} title='Museum Vid 5' description='Museum Vid 5 Description' /></a>
            <a href="/#/MuseumVideos/6"> <VideoCatalogItem thumbnail={image6} title='Museum Vid 6' description='Museum Vid 6 Description' /></a>
            <a href="/#/MuseumVideos/7"> <VideoCatalogItem thumbnail={image7} title='Museum Vid 7' description='Museum Vid 7 Description' /></a>
            <a href="/#/MuseumVideos/8"> <VideoCatalogItem thumbnail={image8} title='Museum Vid 8' description='Museum Vid 8 Description' /></a>
            <a href="/#/MuseumVideos/9"> <VideoCatalogItem thumbnail={image9} title='Museum Vid 9' description='Museum Vid 9 Description' /></a>
            <a href="/#/MuseumVideos/10"> <VideoCatalogItem thumbnail={image10} title='Museum Vid 10' description='Museum Vid 10 Description' /></a>
            <a href="/#/MuseumVideos/11"> <VideoCatalogItem thumbnail={image11} title='Museum Vid 11' description='Museum Vid 11 Description' /></a>
            <a href="/#/MuseumVideos/12"> <VideoCatalogItem thumbnail={image12} title='Museum Vid 12' description='Museum Vid 12 Description' /></a>
            <a href="/#/MuseumVideos/13"> <VideoCatalogItem thumbnail={image13} title='Museum Vid 13' description='Museum Vid 13 Description' /></a>
            <a href="/#/MuseumVideos/14"> <VideoCatalogItem thumbnail={image14} title='Museum Vid 14' description='Museum Vid 14 Description' /></a>
            <a href="/#/MuseumVideos/15"> <VideoCatalogItem thumbnail={image15} title='Museum Vid 15' description='Museum Vid 15 Description' /></a>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCatalog;

