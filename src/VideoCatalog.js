import "./VideoCatalog.css";
import VideoCatalogItem from './VideoCatalogItem';

function VideoCatalog() {
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
            <a href="/MuseumVideos/1"> <VideoCatalogItem title='Museum Vid 1' description='lorus ipsum something something IDRC' thumbnail='https://cvws.icloud-content.com/S/AeCAacMqhEUqHsmzyAbO_e0kZWl5/IMG_1452.JPG?o=AntWhPXXE4CxrXIUIGDQyzFlr5IZRk2ACQpEJDxdYzCw&v=1&z=https%3A%2F%2Fp62-content.icloud.com%3A443&x=1&a=CAogsqJ4jUZ9Uu3mWSvcSghwlpwPxzl_oGYuQ-Pp2tEiQpgSZxCR7Pn02zEYkYON-tsxIgEAUgQkZWl5aiZA7DcvKR2IGfOnMlj-77g2bM_GOsW6fzNhNGPRGZDK04yAVEPNLXImkI9hO4nX4ls_TW0Xk_2pImwz8ScU6JhYuyrReT74Bnj0Y6NQ67k&e=1708310872&r=f19b9c74-ea8b-4887-80a0-c6e1e9176408-10&s=cPMNlxXjifSlGIm1UF3jgOZofm8' /></a>
            <a href="/MuseumVideos/2"> <VideoCatalogItem title='Museum Vid 2' description='Once upon a time I was looking at a squirrel when he said I had a bad haircut so I felt bad and petitioned for the death of all squirrels, which was successful. There are now no more squirrels' /></a>
            <a href="/MuseumVideos/3"> <VideoCatalogItem title='Museum Vid 3' description='lorus ipsum something something IDRC' /></a>
            <a href="/MuseumVideos/4"> <VideoCatalogItem title='Museum Vid 4' description='lorus ipsum something something IDRC' /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCatalog;

