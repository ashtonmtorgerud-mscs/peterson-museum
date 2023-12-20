import Navbar from "./Navbar";
import "./MuseumVideos.css";
import TestVideo from './TestVideo.mp4';
import VideoItem from './VideoItem';
import { useState, useRef, useEffect  } from "react";


function MuseumVideos() {

  /// Use States & Variable definitions

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [buttonText, setButtonText] = useState('Play');
  const [muteButtonText, setMuteButtonText] = useState('Mute');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [muted, setMuted] = useState(false);


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
      setMuteButtonText('Mute');
    } else {
      video.muted = true;
      setMuteButtonText('Muted');
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




  /// Pause Video

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);

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


  return (
    <div className="root">

      <div className="flex container">

        <div className="video-panel">
          <video id="video1" ref={videoRef} controls>
            <source src={TestVideo} volume={volume / 100} muted={false} onTimeUpdate={ handleTimeUpdate } onLoadedMetadata={handleLoadedMetadata} />
            Your browser does not support the video tag.
            <div className="video-elements">
              <h2>Your browser does not support videos. Get rekt, L, bozo, touch grass you absolute dingis</h2>
            </div>

          </video>

          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleVolumeMute}>{muteButtonText}</button>
          <button onClick={handleFullscreen}>{'Fullscreen'}</button>
          <input type="range" id="VolumeSlider" min="0" max="100" value={ volume } onChange={handleVolumeChange}/>
          <input type="range" id="SeekerSlider" min="0" max={ duration+1 } value={ currentTime } onChange={handleSeekChange}/>
          <h1>[TITLE PLACEHOLDER]</h1>


          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              SetPlayBackSpeed(e.target.value);
            }}
          >
            <option value="">1</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

        </div>

        <div className="up-next">
          <h1>Up Next:</h1>
          <div className="up-next-videos">
            <div class="sidebar">
              <ul class="thumbnail-list">
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



