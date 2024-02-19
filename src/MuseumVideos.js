import "./MuseumVideos.css";
import TestVideo from './TestVideo.mp4';
import VideoItem from './VideoItem';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";


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
  const thumbnails = ["How to fart on monkeys", "beating my neighbor's dog to death with a 2x4 challenge (gone wrong)", ""];
  const titles = ["How to fart on monkeys", "beating my neighbor's dog to death with a 2x4 challenge (gone wrong)", "10 donkeys of all time"];
  const description = ["hajeme ni, install BLENDER", "what's going on guys today we're gonna be... ", "1, shrek"];



  ///Retrieving Parameters from the Route

  const { id } = useParams();





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
              <source src={"https://cvws.icloud-content.com/S/AbGhDP2ojZXr02jwp3Hnf22lX7_M/IMG_1452.mp4?o=AuQaonigzj9gxNR_fAvJWdDv--u-NSydDT7tiQANKPjc&v=1&z=https%3A%2F%2Fp62-content.icloud.com%3A443&x=1&a=CAogV72pA0tVP4VfSiTqNPQtsyFHElynYP-oEOZZasrOX3USZxCJ6KXz2zEYif-4-NsxIgEAUgSlX7_MaiY3xiunSq-t3bj43lzqsbZGbma8Ql28IASvRX1u_HyEOidfnRA1cnImAvrdrkVgsHJ5j3tdhwnczV_3zBn0W0BEnyti3p2L8ThHzdCXouo&e=1708307398&r=d8bd83ba-8ca4-44da-8384-6e8507d74091-2&s=fZI54dSvr4EMB25-Cxwu8v72l0I&chrome_unique=57023280"} volume={volume / 100} muted={false} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
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
          <div><h1 className="video-title" >{titles[id] ? titles[id] : "Error 404: Title not found"}</h1></div>

          <div className="description-box"><h3 className="video-description" >{description[id] ? description[id] : "The video you were looking for could not be found. Try returning to the home screen and trying a different video"}</h3></div>
        </div>



        <div className="up-next">
          <h1 className="up-next-text">Up Next:</h1>
          <div className="up-next-videos">
                  <ul class="thumbnail-list">
                    <li>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                      <VideoItem title='Museum Vid 1' description='lorus ipsum something something IDRC'/>
                    </li>

                  </ul>
          </div>
        </div>
      </div>
    </div>




  );
}

export default MuseumVideos;



