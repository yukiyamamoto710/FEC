import React from 'react';

const AdditionalImages = ({images}) => {
  return (
    <div className="additional-images">
      {images.map((image)=><img className="thumbnail" src={image}/>)}
    </div>
  )
}


export default AdditionalImages;