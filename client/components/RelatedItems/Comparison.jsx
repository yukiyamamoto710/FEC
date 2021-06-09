import React from 'react';
import axios from 'axios';
import DescirptionRow from './DescriptionRow.jsx';
import PropTypes from 'prop-types';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featureList: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.combineAllFeatures = this.combineAllFeatures.bind(this);
  }

  // performance wise - I need to fetch data for currently displayed product at a different place
  componentDidMount() {
    axios.get('/get', {params: {endpoint: `products/${this.props.id}`}})
      .then((results) => {
        this.setState({
          currentProduct: results.data
        }, this.combineAllFeatures)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  combineAllFeatures() {
    var allFeatureObjs = this.props.product.features.concat(this.state.currentProduct.features);
    var allFeatures = allFeatureObjs.map(obj=>obj.feature);
    // filter out the duplicate features
    var featureList = [...new Set(allFeatures)];
    this.setState({
      featureList: featureList
    })
  }

  handleClick() {
    this.props.togglePop();
  }

  render() {
    const{product} = this.props;
    const {currentProduct, featureList} = this.state;
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>Comparing</p>
          <table>
            <thead>
              <tr className="column">
                <th className="col-1">{product.name}</th>
                <th className="col-2"></th>
                <th className="col-3">{!currentProduct ? null: currentProduct.name}</th>
              </tr>
            </thead>
            <tbody className="description-row">
              {featureList.map(feature=>
                <DescirptionRow key={feature} feature={feature} relatedProduct={product.features} currentProduct={currentProduct.features}/>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Comparison.propTypes = {
  id: PropTypes.number,
  togglePop: PropTypes.func,
  product: PropTypes.object
}

export default Comparison;
