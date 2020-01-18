import React from 'react';

const VideoList = props => {
    const videos = props.videos.map( vid => vid.snippet.title);

    return(
        <ul className='videoList'>
            <li>{ videos }</li>
        </ul>
    )
}

export default VideoList;