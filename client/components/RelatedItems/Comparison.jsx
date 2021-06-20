import React from 'react';
import DescirptionRow from './DescriptionRow.jsx';
import PropTypes from 'prop-types';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featureList: []
    };
    this.combineAllFeatures = this.combineAllFeatures.bind(this);
  }

  componentDidMount() {
     this.setState({
       currentItem: this.props.currentItem
     }, this.combineAllFeatures)
  }

  combineAllFeatures() {
    var allFeatureObjs = this.props.product.features.concat(this.state.currentItem.features);
    var allFeatures = allFeatureObjs.map(obj=>obj.feature);
    var featureList = [...new Set(allFeatures)];
    this.setState({
      featureList: featureList
    })
  }

  render() {
    const{product} = this.props;
    const {currentItem, featureList} = this.state;
    if (currentItem) {
      return (
        <div data-testid="modal" className="modal">
          <div className="modal_content">
            <span data-testid="close-button" className="close"
              onClick={()=>this.props.togglePop()}>
                &times;
            </span>
            <p className="comparing">Comparing</p>
            <table>
              <thead>
                <tr className="column">
                  <th className="col-1">{product.name}</th>
                  <th className="col-2"></th>
                  <th className="col-3">{currentItem.name}</th>
                </tr>
              </thead>
                {featureList.map((feature, i)=>
                  <DescirptionRow
                    key={feature+i}
                    feature={feature}
                    relatedProduct={product.features}
                    currentItem={currentItem.features}/>
                )}
            </table>
          </div>
        </div>
      )
    } else {
      return (
        <div data-testid="modal" className="modal">
          <div className="modal_content">
          </div>
        </div>
      )
    }
  }
}

Comparison.propTypes = {
  id: PropTypes.number,
  currentItem: PropTypes.object,
  togglePop: PropTypes.func,
  product: PropTypes.object
}

export default Comparison;
