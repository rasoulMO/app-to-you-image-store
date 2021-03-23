import React from 'react';
import ImageCard from './ImageCard';
// import './ImageList.css'

const ImageList = props => {


    //here we use map array method to get list of itemes, and as alwais we pass props from the pernt "App" to the childern "ImageList"

    //const images = props.images.map((image) **before the distractur!!

    
    //const images = props.images.map(({description, id, urls }) => { return <img alt={description} key={id} src={urls.regular} />
    //});
    
    //after the distractur!!
    const images = props.images.map((image) => {
        
        return <ImageCard
            key={image.id}
            image={image}
        />
    });
    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;