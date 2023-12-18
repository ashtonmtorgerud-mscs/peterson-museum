import Navbar from "./Navbar";
import "./MuseumVideos.css";
import TestVideo from './TestVideo.mp4';
import VideoItem from './VideoItem';


function MuseumVideos() {




  var myVideo = document.getElementById("video1"); 
  var playButton = document.getElementById("playButton");

  function playPause() {
    if (typeof myVideo !== "undefined" && myVideo !== null) {
      if (myVideo.paused) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
    } else {
      console.log("myVideo is undefined or null");
    }
  }


  /*function playPause() { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } */



  return (
    <div className="root">
      <Navbar />

      <div className="flex container">

        <div className="video-panel">
          <video id="video1" controls>
            <source src={TestVideo}/>
            Your browser does not support the video tag.
            <div className="video-elements">
              <h2>Your browser does not support videos. Get rekt, L, bozo, touch grass you absolute dingis</h2>
            </div>

          </video>
          <h1>[TITLE PLACEHOLDER]</h1>
          <button onClick={playPause} id="playButton">Play</button> 
        </div>

        <div className="up-next">
          <h1>Up Next:</h1>
          <div className="up-next-videos">
            <div class="sidebar">
              <ul class="thumbnail-list">
                <li>
                  <VideoItem />
                </li>
                <li>
                  <VideoItem />
                </li>
                <li>
                  <VideoItem />
                </li>
                <li>
                  <VideoItem />
                </li>
                <li>
                  <VideoItem />
                </li>
                <li>
                  <VideoItem />
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>



    </div>
  );

}

export default MuseumVideos;



