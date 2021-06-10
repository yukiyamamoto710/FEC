import React from 'react';
import PropTypes from 'prop-types';

const DescriptionRow = ({feature, relatedProduct, currentItem}) => {
  // get an array of obj (if it does not contain a particular feature array should be empty)
  var featureInRelatedProduct = relatedProduct.filter(entry=>entry.feature===feature);
  var featureInCurrentProduct = currentItem.filter(entry=>entry.feature===feature);
  var displayCol1 = null;
  var displayCol3 = null;
  if (featureInRelatedProduct.length) {
    // the current product has a feature, and therefore check its value
    if (featureInRelatedProduct[0].value) {
      displayCol1 = featureInRelatedProduct[0].value;
    } else {
      // used JS source code
      displayCol1 = "\u2713";
    }
  }
  if (featureInCurrentProduct.length) {
    // the current product has a feature, and therefore check its value
    if (featureInCurrentProduct[0].value) {
      displayCol3 = featureInCurrentProduct[0].value;
    } else {
      displayCol3 = "\u2713";
    }
  }
  return (
    <tr className="row">
      <td className="col-1">{displayCol1}</td>
      <td className="col-1">{feature}</td>
      <td className="col-3">{displayCol3}</td>
    </tr>
  )
}

DescriptionRow.propTypes = {
  feature: PropTypes.string,
  relatedProduct: PropTypes.array,
  currentItem: PropTypes.array
}

export default DescriptionRow;