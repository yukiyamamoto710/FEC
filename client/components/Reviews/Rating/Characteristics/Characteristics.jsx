import React from 'react';
import PropTypes from 'prop-types';

const Characteristics = (props) => {
  const { value, dataArray, name } = props;
  const perce = Math.floor((value / 5) * 100);
  const point = {
    position: 'absolute',
    top: '0px',
    left: `${perce}%`,
  };

  return (
    <div
      data-testid="chara"
      className="charaContainer"
    >
      {name}
      <div className="charaBar">
        { dataArray.map((i) => (
          <div key={i}>
            <div className="charaSmallBar" />
            <div className="charaText">
              { i }
            </div>
          </div>
        )) }
        <div style={point}>
          <div className="charaBarPoint" />
        </div>
      </div>
    </div>
  );
};

Characteristics.propTypes = {
  name: PropTypes.string,
  dataArray: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.number,
};

Characteristics.defaultProps = {
  name: '',
  dataArray: [],
  value: 0,
};

export default Characteristics;
