import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map( vid => {
            return <VideoItem 
                key={vid.id.videoId} 
                video={vid}
                onVideoSelect={onVideoSelect}/>;
        }
    );

    return(
        <div className="ui relaxed divided list">
            { renderedList }
        </div>
    )
}

export default VideoList;