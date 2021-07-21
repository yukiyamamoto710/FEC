import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AdditionalImages = ({images, changeMainImage}) => {

  const [idx, setIndex] = useState(0);
  const [displayed, setDisplay] = useState(images.slice(0, 4))

  const toggleMainImage = (e) => {
    changeMainImage(e.target.src);
  }

  return (
    <div data-testid="additional-images" className="additional-images">
      <button className="slideLeft-mini"
        onClick={() => {
          setIndex(idx-1)
          setDisplay(images.slice(idx-1, idx+3))}}
        hidden={idx === 0}
        data-testid="slideLeft-mini">
          &lt;
        </button>
      {displayed.map((image, i)=>
        <img data-testid={i}
          key={`${image}/${i}`}
          className="thumbnail"
          alt="n/a" src={image}
          onClick={toggleMainImage}/>)}
      <button className="slideRight-mini"
        onClick={()=> {
          setIndex(idx+1)
          setDisplay(images.slice(idx+1, idx+5))}}
          disabled={images.length < 4 || idx === images.length-4}
          data-testid="slideRight-mini">
            &gt;
      </button>
    </div>
  )
}

AdditionalImages.propTypes = {
  images: PropTypes.array,
  changeMainImage: PropTypes.func
}

export default AdditionalImages;