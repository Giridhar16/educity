import React,{useRef} from "react";
import './videoPlayer.css'
import video from '../../assets/college-video.webm'
const VideoPlayer = ({playState,setPlayState}) => {

const player = useRef(null);

const closePlayer = (e) =>{
    if(e.target === player.current){
        setPlayState(false);
    }
}
    return(
        <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
            {/* <video src="https://youtu.be/jir7pJcjy3w?si=UamPwP3o8G9mBGKu"></video> */}
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}
export default VideoPlayer