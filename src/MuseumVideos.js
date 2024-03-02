import "./MuseumVideos.css";
import VideoItem from './VideoItem';
import TestVideo from './TestVideo.mp4';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";



///Imported Videos
import Thumbnail1 from './Videos/Thumbnail1.png';
import Thumbnail2 from './Videos/Thumbnail2.png';
import Thumbnail3 from './Videos/Thumbnail3.png';
import Thumbnail4 from './Videos/Thumbnail4.png';
import Thumbnail5 from './Videos/Thumbnail5.png';
import Thumbnail6 from './Videos/Thumbnail6.png';
import Thumbnail7 from './Videos/Thumbnail7.png';
import Thumbnail8 from './Videos/Thumbnail8.png';
import Thumbnail9 from './Videos/Thumbnail9.png';
import Thumbnail10 from './Videos/Thumbnail10.png';
import Thumbnail11 from './Videos/Thumbnail11.png';
import Thumbnail12 from './Videos/Thumbnail12.png';
import Thumbnail13 from './Videos/Thumbnail13.png';
import Thumbnail14 from './Videos/Thumbnail14.png';
import Thumbnail15 from './Videos/Thumbnail15.png';


import Video1 from './Videos/Video1.mp4';
import Video2 from './Videos/Video2.mp4';
import Video3 from './Videos/Video3.mp4';
import Video4 from './Videos/Video4.mp4';
// import Video5 from './Videos/Video5.mp4';
// import Video6 from './Videos/Video6.mp4';
import Video7 from './Videos/Video7.mp4';
import Video8 from './Videos/Video8.mp4';
// import Video9 from './Videos/Video9.mp4';
import Video10 from './Videos/Video10.mp4';
import Video11 from './Videos/Video11.mp4';
// import Video12 from './Videos/Video12.mp4';
// import Video13 from './Videos/Video13.mp4';
import Video14 from './Videos/Video14.mp4';
import Video15 from './Videos/Video15.mp4';

function MuseumVideos() {



  /// Use States & Variable definitions

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [buttonText, setButtonText] = useState('Play');
  const [muteButtonText, setMuteButtonText] = useState('🔊');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [muted, setMuted] = useState(false);



  /// Video Array for names, titles, and descriptions: 
  "This is a Test Video"

  const titles = ["This is a test video", "1. Military Memorabilia", "2. Church Plates", "3. World War 1 Plates", "4. Our Saviors Church Items"];
  const description = ["If you're seeing this, you were probably messing arond with the link. Try another video id or use the vatalog for a proper video",
  "Check out these antique pieces of history including volumes, photos, and pillowcases made by the Boyum family",
  "View a collection of church plates from a selection of local churches. Along with the Norwegian-American Centennial, and more",
  "See this collection of WWI plates and books of servicemen from WWI, WWII, and the Korean War.",
  "View a whisky bottle found within the foundation of our Saviors Chuch, and other interesting relics",
  

  ];



  ///Retrieving Parameters from the Route

  const { id } = useParams();
  const vidID = id;
  
  let selectedVideo = TestVideo;




  switch (parseInt(vidID)){
    case 1: selectedVideo = Video1; break;
    case 2: selectedVideo = Video2; break;
    case 3: selectedVideo = Video3; break;
    case 4: selectedVideo = Video4; break;
    case 5: selectedVideo = Video5; break;
    case 6: selectedVideo = Video6; break;
    case 7: selectedVideo = Video7; break;
    case 8: selectedVideo = Video8; break;
    case 9: selectedVideo = Video9; break;
    case 10: selectedVideo = Video10; break;
    case 11: selectedVideo = Video11; break;
    case 12: selectedVideo = Video12; break;
    case 13: selectedVideo = Video13; break;
    case 14: selectedVideo = Video14; break;
    case 15: selectedVideo = Video15; break;
    default: selectedVideo = TestVideo; 
  }


  /// Volume Changing Code

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    const video = videoRef.current;
    video.volume = newVolume / 100;
    setVolume(newVolume);
    setDuration(parseInt(videoRef.current.duration));
  };

  const handleVolumeMute = () => {
    const video = videoRef.current;
    if (video.muted) {
      video.muted = false;
      setMuteButtonText('🔊');
    } else {
      video.muted = true;
      setMuteButtonText('🔇');
    }

  }



  /// Change the video seaking


  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    console.log("Absolute Gigabanger");
    setDuration(parseInt(videoRef.current.duration));
  };

  const handleSeekChange = (e) => {
    const seekTime = e.target.value;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };


  /// Rewind 10 seconds

  const Rewind = () => {
    videoRef.current.currentTime = videoRef.current.currentTime - 10;
    setCurrentTime(videoRef.current.currentTime);
  };


  const FastForward = () => {
    videoRef.current.currentTime = videoRef.current.currentTime + 10;
    setCurrentTime(videoRef.current.currentTime);
  };





  /// Pause Video

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
    setDuration(parseInt(videoRef.current.duration));
    if (buttonText === 'Play')
      setButtonText('Paused');

    else
      setButtonText('Play');
  };


  /// Handle Video Fullscreening 

  const handleFullscreen = () => {
    const video = videoRef.current;
    video.requestFullscreen();
  }


  /// Use Effect to update the volume slider and seeking slider

  useEffect(() => {
    const video = videoRef.current;

    const handleSeekUpdate = () => {
      setCurrentTime(video.currentTime);
    };



    const handleVolumeUpdate = () => {
      setVolume(Math.round(video.volume * 100));
    };

    video.addEventListener("timeupdate", handleSeekUpdate);
    video.addEventListener("volumechange", handleVolumeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleSeekUpdate);
      video.removeEventListener("volumechange", handleVolumeUpdate);
    };
  }, []);




  /// Speed Control Dropdown Menu

  const [selectedOption, setSelectedOption] = useState('');

  const SetPlayBackSpeed = (e) => {
    const video = videoRef.current;
    console.log(e);
    video.playbackRate = e;
  }



  // Options for the dropdown
  const options = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'];





  function formatVideoTime(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }





  return (

    <div className="root">

      <div className="barrier"> </div>


      <div className="flex container">

        <div className="video-panel">
          <div className="video-container">
            <video id="video1" ref={videoRef}>
              <source src={selectedVideo} volume={volume / 100} muted={false} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
              Your browser does not support the video tag.
            </video>


            <input className="timeline" type="range" id="SeekerSlider" min="0" max={duration + 1} value={currentTime} onChange={handleSeekChange} />
            <div className="button-container">
              <button className="video-controls" onClick={Rewind}>{'↺'}</button>
              <button className="video-controls" onClick={handlePlayPause}>{isPlaying ? '⏸' : '▶'}</button>
              <button className="video-controls" onClick={FastForward}>{'↻'}</button>
              <button className="video-controls" onClick={handleVolumeMute}>{muteButtonText}</button>

              <button className="video-controls-alt">{''}
                <input className="" type="range" id="VolumeSlider" min="0" max="100" value={volume} onChange={handleVolumeChange} />
              </button>


              <button className="video-controls-special" onClick={handlePlayPause}>{''}</button>



              <button className="video-controls-alt" onClick={handlePlayPause}>{''}
                <p className="duration-text">{formatVideoTime(currentTime) + '/' + formatVideoTime(duration)}</p>
              </button>




              <select className="video-controls" value={selectedOption} onChange={(e) => {
                setSelectedOption(e.target.value); SetPlayBackSpeed(e.target.value);
              }}
              >
                <option value="1">1</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>


              <button className="video-controls" onClick={handleFullscreen}> <div>&#128470;</div></button>

            </div>  {/* className="button-container" */}

          </div>
          <div><h1 className="video-title" >{titles[vidID] ? titles[vidID] : "Error 404: Title not found"}</h1></div>

          <div className="description-box"><h3 className="video-description" >{description[vidID] ? description[vidID] : "The video you were looking for could not be found. Try returning to the home screen and trying a different video"}</h3></div>
        </div>



        <div className="up-next">
          <h1 className="up-next-text" style={vidID == 15 ? {display: "none"} : {}}>Next Videos: </h1>
          <div className="up-next-videos">
                  <ul class="thumbnail-list">
                    <li>
                      <a href="/MuseumVideos/1" style={vidID >= 1 ? {display: "none"} : {}}><VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC' image={Thumbnail1} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/2" style={vidID >= 2 ? {display: "none"} : {}}><VideoItem title='Museum Vid 2' description='lorus ipsum something something IDRC' image={Thumbnail2} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/3" style={vidID >= 3 ? {display: "none"} : {}}><VideoItem title='Museum Vid 3' description='lorus ipsum something something IDRC' image={Thumbnail3} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/4" style={vidID >= 4 ? {display: "none"} : {}}><VideoItem title='Museum Vid 4' description='lorus ipsum something something IDRC' image={Thumbnail4} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/5" style={vidID >= 5 ? {display: "none"} : {}}><VideoItem title='Museum Vid 5' description='lorus ipsum something something IDRC' image={Thumbnail5} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/6" style={vidID >= 6 ? {display: "none"} : {}}><VideoItem title='Museum Vid 6' description='lorus ipsum something something IDRC' image={Thumbnail6} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/7" style={vidID >= 7 ? {display: "none"} : {}}><VideoItem title='Museum Vid 7' description='lorus ipsum something something IDRC' image={Thumbnail7} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/8" style={vidID >= 8 ? {display: "none"} : {}}><VideoItem title='Museum Vid 8' description='lorus ipsum something something IDRC' image={Thumbnail8} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/9" style={vidID >= 9 ? {display: "none"} : {}}><VideoItem title='Museum Vid 9' description='lorus ipsum something something IDRC' image={Thumbnail9} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/10" style={vidID >= 10 ? {display: "none"} : {}}><VideoItem title='Museum Vid 10' description='lorus ipsum something something IDRC' image={Thumbnail10} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/11" style={vidID >= 11 ? {display: "none"} : {}}><VideoItem title='Museum Vid 11' description='lorus ipsum something something IDRC' image={Thumbnail11} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/12" style={vidID >= 12 ? {display: "none"} : {}}><VideoItem title='Museum Vid 12' description='lorus ipsum something something IDRC' image={Thumbnail12} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/13" style={vidID >= 13 ? {display: "none"} : {}}><VideoItem title='Museum Vid 13' description='lorus ipsum something something IDRC' image={Thumbnail13} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/14" style={vidID >= 14 ? {display: "none"} : {}}><VideoItem title='Museum Vid 14' description='lorus ipsum something something IDRC' image={Thumbnail14} background='rgb(137, 118, 108)'/></a>
                      <a href="/MuseumVideos/15" style={vidID >= 15 ? {display: "none"} : {}}><VideoItem title='Museum Vid 15' description='lorus ipsum something something IDRC' image={Thumbnail15} background='rgb(137, 118, 108)'/></a>
                    </li>
                  </ul>
          </div>
          <h1 className="up-next-text" style={vidID == 1 ? {display: "none"} : {}}>Previous Videos: </h1>
          <div className="up-next-videos">
                    <ul class="thumbnail-list">
                      <li>
                        <a href="/MuseumVideos/1" style={vidID <= 1 ? {display: "none"} : {}}><VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC' image={Thumbnail1} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/2" style={vidID <= 2 ? {display: "none"} : {}}><VideoItem title='Museum Vid 2' description='lorus ipsum something something IDRC' image={Thumbnail2} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/3" style={vidID <= 3 ? {display: "none"} : {}}><VideoItem title='Museum Vid 3' description='lorus ipsum something something IDRC' image={Thumbnail3} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/4" style={vidID <= 4 ? {display: "none"} : {}}><VideoItem title='Museum Vid 4' description='lorus ipsum something something IDRC' image={Thumbnail4} background='rgb(137, 118, 108)'/></a>
                        {/* <a href="/MuseumVideos/5" style={vidID <= 5 ? {display: "none"} : {}}><VideoItem title='Museum Vid 5' description='lorus ipsum something something IDRC' image={Thumbnail5} background='rgb(137, 118, 108)'/></a> */}
                        {/* <a href="/MuseumVideos/6" style={vidID <= 6 ? {display: "none"} : {}}><VideoItem title='Museum Vid 6' description='lorus ipsum something something IDRC' image={Thumbnail6} background='rgb(137, 118, 108)'/></a> */}
                        <a href="/MuseumVideos/7" style={vidID <= 7 ? {display: "none"} : {}}><VideoItem title='Museum Vid 7' description='lorus ipsum something something IDRC' image={Thumbnail7} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/8" style={vidID <= 8 ? {display: "none"} : {}}><VideoItem title='Museum Vid 8' description='lorus ipsum something something IDRC' image={Thumbnail8} background='rgb(137, 118, 108)'/></a>
                        {/* <a href="/MuseumVideos/9" style={vidID <= 9 ? {display: "none"} : {}}><VideoItem title='Museum Vid 9' description='lorus ipsum something something IDRC' image={Thumbnail9} background='rgb(137, 118, 108)'/></a> */}
                        <a href="/MuseumVideos/10" style={vidID <= 10 ? {display: "none"} : {}}><VideoItem title='Museum Vid 10' description='lorus ipsum something something IDRC' image={Thumbnail10} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/11" style={vidID <= 11 ? {display: "none"} : {}}><VideoItem title='Museum Vid 11' description='lorus ipsum something something IDRC' image={Thumbnail11} background='rgb(137, 118, 108)'/></a>
                        {/* <a href="/MuseumVideos/12" style={vidID <= 12 ? {display: "none"} : {}}><VideoItem title='Museum Vid 12' description='lorus ipsum something something IDRC' image={Thumbnail12} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/13" style={vidID <= 13 ? {display: "none"} : {}}><VideoItem title='Museum Vid 13' description='lorus ipsum something something IDRC' image={Thumbnail13} background='rgb(137, 118, 108)'/></a> */}
                        <a href="/MuseumVideos/14" style={vidID <= 14 ? {display: "none"} : {}}><VideoItem title='Museum Vid 14' description='lorus ipsum something something IDRC' image={Thumbnail14} background='rgb(137, 118, 108)'/></a>
                        <a href="/MuseumVideos/15" style={vidID <= 15 ? {display: "none"} : {}}><VideoItem title='Museum Vid 15' description='lorus ipsum something something IDRC' image={Thumbnail15} background='rgb(137, 118, 108)'/></a>
                      </li>
                    </ul>
            </div>
        </div>
      </div>
    </div>

  );
}




export default MuseumVideos;



