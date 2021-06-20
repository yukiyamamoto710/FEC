import React from 'react';
import PropTypes from 'prop-types';

import FormStarCK from './FormStarCK/FormStarCK';
import { msg, textExample } from '../data';
import Warning from './Warning/Warning';
import usePopOut from './usePopOut';

const PopOut = (props) => {
  const { addUserReview, data, cancelAddReview } = props;
  const key = Object.keys(data.characteristics);
  const obj = {};
  for (let i = 0; i < key.length; i += 1) {
    obj[key[i]] = {
      id: data.characteristics[key[i]].id,
      value: 0,
    };
  }
  const {
    handleChangeTarget,
    handleClickCheckReview,
    isShowWarning,
    starClick,
    userReview,
    recommend,
    rating,
    body,
    characteristics,
    listWarning,
  } = usePopOut({
    key, obj, data, addUserReview, cancelAddReview,
  });

  return (
    <div
      className="popOut"
      data-testid="popout"
    >
      {listWarning.length !== 0
        ? (
          <Warning
            data-testid="warning"
            listWarning={listWarning}
            isShowWarning={isShowWarning}
          />
        ) : null}
      <div className="popOutContainer">
        <div className="topContainer">
          <div className="topSmallContainer">
            <div>Recommend</div>
            <div className="buttonBase">
              <button
                data-testid="recommendYes"
                type="button"
                onClick={handleChangeTarget}
                className={recommend
                  ? 'clickedButton'
                  : 'unclickedButton'}
                id="recommend"
                value="true"
              >
                YES
              </button>
              <button
                data-testid="recommendNo"
                type="button"
                onClick={handleChangeTarget}
                className={recommend
                  ? 'unclickedButton'
                  : 'clickedButton'}
                id="recommend"
                value={false}
              >
                No
              </button>
            </div>
          </div>
          <button
            className="formButton"
            type="button"
            onClick={cancelAddReview}
          >
            X
          </button>
        </div>
        <div className="firstContainer">
          <div className="firstTopContainer">
            <FormStarCK
              starClick={starClick}
              info={Number(rating)}
              name="Stars"
            />
            {Object.keys(characteristics).map((i) => (
              <FormStarCK
                starClick={starClick}
                key={i}
                info={Number(characteristics[i].value)}
                name={i}
              />
            ))}
          </div>
          <div className="midSmallContainer">
            <div className="tagContainer">
              <div className="tag">Name :</div>
              <div className="tag">Email :</div>
              <div className="tag">Title :</div>
              <div className="tag">Description :</div>
              <div className="tag">
                Count :
                {body.length}
              </div>
            </div>
            <div className="textcontainer">
              { ['name', 'email', 'summary'].map((i, index) => (
                <div key={i} className="formTextContainer">
                  <div>
                    <input
                      data-testid={`formText${index}`}
                      className="formText"
                      type="text"
                      maxLength="60"
                      onChange={handleChangeTarget}
                      placeholder={textExample[index]}
                      id={i}
                    />
                    {userReview[i].length === 0 || msg[index] === undefined
                      ? <div className="block" />
                      : <div className="formMSG">{msg[index]}</div>}
                  </div>
                </div>
              ))}
              <textarea
                data-testid="body"
                id="body"
                className="textarea"
                rows="5"
                maxLength="1000"
                onChange={handleChangeTarget}
                placeholder={textExample[3]}
              />
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <button
            type="button"
            data-testid="submitBtn"
            className="clickedButton"
            onClick={handleClickCheckReview}
          >
            Submit
          </button>
          <input
            className="clickedButton"
            type="file"
            key="photo1"
            onChange={handleChangeTarget}
            id="photos"
          />
          <input
            className="clickedButton"
            type="file"
            key="photo2"
            onChange={handleChangeTarget}
            id="photos"
          />
        </div>
      </div>
    </div>
  );
};

PopOut.propTypes = {
  data: PropTypes.shape({
    characteristics: PropTypes.shape({}),
    product_id: PropTypes.string,
  }),
  addUserReview: PropTypes.func,
  cancelAddReview: PropTypes.func,
};
PopOut.defaultProps = {
  data: { characteristics: {}, product_id: '25711' },
  addUserReview: () => 1,
  cancelAddReview: () => 1,
};
export default PopOut;
