import React, {useRef}from 'react'
import './VideoPlayer.css'
import video from '../../assets/college_video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closedPlayer = (e) => {
        if(e.target === player.current) {
            setPlayState(false);
        }
    }
  return (
    <div className = {`video-player ${playState ? '' : 'hide' }`}
    ref = {player} onClick = {closedPlayer}>
    <video src ={video} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer