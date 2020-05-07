import React from 'react';
import './video.css';

const Videoitem = ({video, onvideoselect })=>{
    return (
    <div onClick={()=>onvideoselect(video)} className="item videoItem">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>

        <div className="content" >
             <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );
   }

   export default Videoitem;
