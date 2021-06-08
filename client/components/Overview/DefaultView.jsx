/* eslint-disable react/prop-types */
import React from 'react';

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <div className = 'thumbnails'>
        {this.props.thumbnailArray.map((item) => {
          return(
            <>{<img className = 'thumbnail' src= {item.photos[0].thumbnail_url} alt="Picture of Clothing"></img>}</>
          );
        })}
      </div>
      <img className = 'bigPicture' src= {this.props.picture} alt="Picture of Clothing"></img>
      </>
    )

  }



}


export default DefaultView;