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
    this.changeMainImage = this.changeMainImage.bind(this);
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

  changeMainImage(e) {
    this.props.changeMainImage(e.target.src)
  }

  render() {
    const {images} = this.props;
    const {idx, displayed} = this.state;
    return (
      <div className="additional-images">
        <button className="slideLeft-mini"
          onClick={this.prevProduct}
          hidden={idx === 0}>
            &lt;
          </button>
        {displayed.map((image)=><img key={image} className="thumbnail" src={image} onClick={this.changeMainImage}/>)}
        <button className="slideRight-mini"
            onClick={this.nextProduct}
            disabled={images.length < 4 || idx === images.length-4}>
              &gt;
        </button>
      </div>
    )
  }
}

AdditionalImages.propTypes = {
  images: PropTypes.array,
  changeMainImage: PropTypes.func
}

export default AdditionalImages;