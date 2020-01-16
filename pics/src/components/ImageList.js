import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props  => {
    //const images =  props.images.map( img => <img alt={img.description} key={img.id} src={ img.urls.regular } />);
    //destructured version
    const images =  props.images.map( img => <ImageCard key={img.id} image={img}/>);

    return(
        <div className="imageList">
            { images }
        </div>
    )
};

export default ImageList;