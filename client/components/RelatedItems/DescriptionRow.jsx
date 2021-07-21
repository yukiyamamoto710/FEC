import React from 'react';
import PropTypes from 'prop-types';

const DescriptionRow = ({feature, relatedProduct, currentItem}) => {
  var featureInRelatedProduct = relatedProduct.filter(entry=>entry.feature===feature);
  var featureInCurrentProduct = currentItem.filter(entry=>entry.feature===feature);
  var displayCol1 = null;
  var displayCol3 = null;
  if (featureInRelatedProduct.length) {
    if (featureInRelatedProduct[0].value) {
      displayCol1 = featureInRelatedProduct[0].value;
    } else {
      displayCol1 = "\u2713";
    }
  }
  if (featureInCurrentProduct.length) {
    if (featureInCurrentProduct[0].value) {
      displayCol3 = featureInCurrentProduct[0].value;
    } else {
      displayCol3 = "\u2713";
    }
  }
  return (
    <tbody className="description-row">
      <tr data-testid="row" className="row">
        <td data-testid="col-1" className="col-1">{displayCol1}</td>
        <td data-testid="col-2" className="col-1">{feature}</td>
        <td data-testid="col-3" className="col-3">{displayCol3}</td>
      </tr>
    </tbody>
  )
}

DescriptionRow.propTypes = {
  feature: PropTypes.string,
  relatedProduct: PropTypes.array,
  currentItem: PropTypes.array
}

export default DescriptionRow;