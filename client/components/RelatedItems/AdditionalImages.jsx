import React from 'react';
import PropTypes from 'prop-types';

class AdditionalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      displayed: []
    };
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayed: [...this.props.images].slice(0, 4)
    })
  }

  nextProduct() {
    this.setState({
      idx: this.state.idx+1,
      displayed: [...this.props.images].slice(this.state.idx+1, this.state.idx+5)
    })
  }

  prevProduct() {
    this.setState({
      idx: this.state.idx-1,
      displayed: [...this.props.images].slice(this.state.idx-1, this.state.idx+3)
    })
  }

  render() {
    const {images} = this.props;
    const {idx, displayed} = this.state;
    return (
      <div className="additional-images">
        <button className="slideLeft"
          onClick={this.prevProduct}
          hidden={idx === 0}>
            &lt;
          </button>
        {displayed.map((image)=><img key={image} className="thumbnail" src={image}/>)}
        <button className="slideRight"
            onClick={this.nextProduct}
            disabled={images.length < 4 || idx === images.length-4}>
              &gt;
        </button>
      </div>
    )
  }
}

AdditionalImages.propTypes = {
  images: PropTypes.array
}

export default AdditionalImages;