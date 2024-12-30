import React from 'react';
import './video-lecture.css';
import ReactPlayer from "react-player";
import { useRef, useState } from 'react';
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import star from '../../assets/images/Starblue.png';
import { HiMenuAlt1 } from "react-icons/hi";
import { FaCheckSquare } from "react-icons/fa";
import { LuCirclePlay } from "react-icons/lu";
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

    const [activePlay, setActivePlay] = useState(0);
    const[width,setWidth]=useState('-40%')
    const[flag,setFlag]=useState(true)

     
    const videoList = [

        {
            title: 'Video: Basic HTML Tags',
            duration: '10 Min'
        },
        {
            title: 'Video: Nesting HTML Tags',
            duration: '25 Min'
        },
        {
            title: 'Video: CSS Integration',
            duration: '20 Min'
        },

        {
            title: 'Video: Basic HTML Page Example',
            duration: '20 Min'
        },

        {
            title: 'Video: HTML Forms and Input Elements',
            duration: '20 Min'
        },

        {
            title: 'Video: Links and Navigation',
            duration: '20 Min'
        },

        {
            title: 'Video: HTML Document Structure',
            duration: '20 Min'
        },
        // 
        
      
       


    ]

    return (
        <div className="d-flex w-100% mt-4">
            <div className='aside' style={{ width: '40%',  marginLeft:flag ? '-40%':'3%' ,transition:'0.3s' }}>
                <div onClick={()=>setFlag(true)}>  <HiMenuAlt1 className=' menu' /> <span className='close'>close menu</span></div>
                <h4 className='courseHeading'>Course Content</h4>
                <div className='mt-3 list'>
                    {
                        videoList?.map((video, index) => {
                            return <div onClick={() => setActivePlay(index)} key={index} className='d-flex gap-2 align-items-start'>
                                {activePlay == index ? <FaCheckSquare className="checkbox" /> : <LuCirclePlay className='playIcon' />} <p className='videoTitle'>{video.title}   <p className='time'>{video.time}</p></p>

                            </div>
                        })
                    }


                </div>


            </div>


            <div className='video'>

                <div className='videoContainer'>

              { flag && <div onClick={()=>setFlag(false)}  style={{left:'0px',position:'absolute',cursor:'pointer',zIndex:20}}>  <HiMenuAlt1 className=' menu ' /> <span className='close'>open menu</span></div>
}
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
                        <p className='more-desc'>Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React. <br></br>
                            <br></br>

                            In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.
                            <br></br>
                            <br></br>

                            Lets start now with out getting any further late. lets dive in.</p>
                    </div>

                    <p className='d-flex align-items-center'><img src={star} /> <span className='rating'>4.5</span></p>

                </div>
            </div>
        </div>

    )
}

export default VideoLecture;