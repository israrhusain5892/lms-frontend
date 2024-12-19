import React from 'react';
import './video-lecture.css';
import ReactPlayer from "react-player";
import { useRef, useState } from 'react';
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import star from '../../assets/images/Starblue.png';
function VideoLecture() {
    const playerRef = useRef(null); // Reference to ReactPlayer
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Play/Pause Toggle
    const handlePlayPause = () => setPlaying(!playing);

    // Seek Forward
    const handleSeekForward = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10); // 10 seconds forward
        }
    };

    // Seek Backward
    const handleSeekBackward = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10); // 10 seconds backward
        }
    };

    // Handle Progress
    const handleProgress = (state) => {
        setProgress(state.played * 100); // Progress as percentage
    };

    return (
        <div >

            <div className='videoContainer'>


                <ReactPlayer
                    ref={playerRef}
                    url="https://thetestdata.com/assets/video/mp4/highquality/4k_Thetestdata.mp4"
                    playing={playing}
                    onProgress={handleProgress}
                    controls={true}
                    width="100%"
                    height='500px'
                    style={{ margin: 'auto' }}


                />

                {/* Custom Controls */}
                <div className="controlsButton" >
                    <button onClick={handleSeekBackward}>
                        <FaBackwardStep className='text-light' />
                    </button>
                    <button onClick={handlePlayPause} className='playBtn'>
                        {playing ? <FaPause className='text-light fs-3' /> : <FaPlay className='text-light' />}
                    </button>
                    <button onClick={handleSeekForward}><FaForwardStep className='text-light' /></button>
                </div>
            </div>

            <div className='videoContent'>
                <div className='titleContainer'>
                    <p className='videoTitle'>Python Basics</p>
                    <p className="date">2023.1.Programming</p>
                    <p className='description'>Learn the basics of Python programming language in this comprehensive course.</p>
                </div>

                <p className='d-flex align-items-center'><img src={star} /> <span className='rating'>4.5</span></p>

            </div>
        </div>
    )
}

export default VideoLecture;