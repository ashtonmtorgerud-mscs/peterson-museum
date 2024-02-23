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
        <h2>This is a test</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra tellus. Nullam interdum lacus at cursus malesuada. Pellentesque consequat augue eu urna facilisis commodo. Mauris consectetur, mauris vel semper iaculis, libero elit efficitur lorem, ac tincidunt justo lectus in mauris.</p>

        <div className="gap"></div>
      </div>


      <div className="up-next-videos">
        <ul class="videos-list">
          <li>
            <a href="/MuseumVideos/1"> <VideoCatalogItem thumbnail={image1} title='Museum Vid 1' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/2"> <VideoCatalogItem thumbnail={image2} title='Museum Vid 2' description='Once upon a time I was looking at a squirrel when he said I had a bad haircut so I felt bad and petitioned for the death of all squirrels, which was successful. There are now no more squirrels' /></a>
            <a href="/MuseumVideos/3"> <VideoCatalogItem thumbnail={image3} title='Museum Vid 3' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/4"> <VideoCatalogItem thumbnail={image4} title='Museum Vid 4' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/5"> <VideoCatalogItem thumbnail={image5} title='Museum Vid 5' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/6"> <VideoCatalogItem thumbnail={image6} title='Museum Vid 6' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/7"> <VideoCatalogItem thumbnail={image7} title='Museum Vid 7' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/8"> <VideoCatalogItem thumbnail={image8} title='Museum Vid 8' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/9"> <VideoCatalogItem thumbnail={image9} title='Museum Vid 9' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/10"> <VideoCatalogItem thumbnail={image10} title='Museum Vid 10' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/11"> <VideoCatalogItem thumbnail={image11} title='Museum Vid 11' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/12"> <VideoCatalogItem thumbnail={image12} title='Museum Vid 12' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/13"> <VideoCatalogItem thumbnail={image13} title='Museum Vid 13' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/14"> <VideoCatalogItem thumbnail={image14} title='Museum Vid 14' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/15"> <VideoCatalogItem thumbnail={image15} title='Museum Vid 15' description='lorus ipsum something something IDRC' /></a>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCatalog;

