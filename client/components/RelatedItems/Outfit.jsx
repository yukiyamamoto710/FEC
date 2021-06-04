import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const Outfit = (props) => {
  return (
    <ul>
      <div className="container">
        <h3>Outfit</h3>
        <div>
          <ul className="slider">
            <li className="slide">
              {props.selectedItemsList.map(product=>
                <CardTemplate product={product} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </ul>
  )
}

export default Outfit;