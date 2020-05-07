import React from 'react';

const Videodetail = ({video})=>{
    if (!video){
        return <div>loading</div>;
    }
    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`      //it is es2015 with `
             //'https://www.youtube.com/embed/'+{};--> it is es5
    
             return (
        <div>
            <div className="ui embed">
                <iframe title="video_title" src={VideoSrc}></iframe>
            </div>
          <div className="ui segmant">
             <h4 className="ui header">{video.snippet.title}</h4>
             <p>{video.snippet.description}</p>
          </div>
        </div>
    );

}

export default Videodetail;