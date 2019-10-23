import React from 'react';

const Image = ({image}) => {
    if(image && image.buffer) 
    {
        //create the source string for the image
        const img = `data:${image.mimetype};base64,`+image.buffer;
    
    //return an html image tag
    return(
        <>
            <img src={img} alt="user uploaded data" height="500" width="700"></img>
        </>
    );
    //no image on this article
    } else {
        return (
            <>
            </>
        );
    }
}
export default Image;