import React from 'react';
import Videoitem from './videolist1by1';



const Videolists = ({videos, onvideoselect}) =>{
    const Rendered = videos.map((video)=>{
   return (
       <div><Videoitem key={video.id.videoId} onvideoselect={onvideoselect} video={video}/></div>
       
     );
    } );
    return <div className="ui relaxed divided list">{Rendered}</div>;
}
export default Videolists;


