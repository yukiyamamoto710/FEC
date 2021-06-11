import React from 'react';
import PropTypes from 'prop-types';
import Top from './rttop';
import Message from './message';
import SRList from './srlist';
import Characteristics from './characteristics';
import { Data } from './data';

const Rating = (props) => {
  const { rating, ratingstar } = props;
  const obj = { ...rating.ratings };
  const key = Object.keys(obj).sort();
  const biggest = Number(key[key.length - 1]);
  const num = 1;
  const keyArray = [...Array(biggest)].map(() => (String(num + 1)));
  const valueArray = keyArray.map((i) => {
    if (obj[i] !== undefined) { Number(obj[i]); }
    return 0;
  });
  const size = key.reduce((sum, i) => (sum + Number(obj[i])), 0);
  const perArray = valueArray.map((i) => Math.floor((i / size) * 100));
  const total = key.reduce((sum, i) => (sum + Number(i) * Number(obj[i])), 0);
  const ave = Math.round((total / size) * 10) / 10;
  const tNum = Number(rating.recommended.true);
  const fNum = Number(rating.recommended.false);
  const rAve = Math.floor((tNum / (tNum + fNum)) * 100);
  const text = `${rAve}% of reviews recommend this product`;
  const c = 'characteristics';
  const cKey = Object.keys(rating[c]);

  return (
    <div style={style}>
      <Top rating={ave} />
      <Message
        text={text}
        style={msg}
      />
      <SRList
        star={keyArray.reverse()}
        ratingstar={ratingstar}
        per={perArray.reverse()}
      />
      {cKey.map((i, index) => (
        <Characteristics
          key={index}
          array={Data[i]}
          name={i}
          value={rating[c][i].value}
        />
      ))}
    </div>
  );
};

export default Rating;

const style = {
  width: '40%',
  marginTop: '20px',
};

const msg = {
  fontSize: '10px',
  marginTop: '10px',
  justifyContent: 'left',
  margin: '10px',
};
