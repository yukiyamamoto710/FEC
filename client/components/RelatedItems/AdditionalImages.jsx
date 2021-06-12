import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AdditionalImages = ({images, changeMainImage}) => {

  const [state, setState] = useState({idx: 0, displayed: [...images].slice(0, 4)});

  const toggleMainImage = (e) => {
    changeMainImage(e.target.src);
  }

  return (
    <div className="additional-images">
      <button className="slideLeft-mini"
        onClick={()=>setState({idx: state.idx-1, displayed: [...images].slice(state.idx-1, state.idx+3)})}
        hidden={state.idx === 0}
        data-testid="slideLeft-mini">
          &lt;
        </button>
      {state.displayed.map((image, i)=><img data-testid={i} key={image} className="thumbnail" src={image} onClick={toggleMainImage}/>)}
      <button className="slideRight-mini"
          onClick={()=>setState({idx: state.idx+1, displayed: [...images].slice(state.idx+1, state.idx+5)})}
          disabled={images.length < 4 || state.idx === images.length-4}
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