import React, { useState, useEffect } from 'react';
import { textExample } from '../data';
import Warning from '../PopOut/Warning/Warning';
import postQA from './postQA';
import usePopOutQA from './usePopOutQA';
import PropTypes from 'prop-types';

const PopOutQA = (props)=>{
  const { addUserReview, target, id, cancelAddReview } = props;

  const {
    warningcancel,
    handleClickCheckReview,
    handleChangeTarget,
    photos,
    body,
    name,
    email,
    listWarning,
  } = usePopOutQA(id, addUserReview)

  return (
    <div>
      <div
        className="QAPopOut"
        data-testid="popout"
      >
        {listWarning.length !== 0
          ? (
            <Warning
              data-testid="warning"
              listWarning={listWarning}
              isShowWarning={warningcancel}
            />
          ) : null}
        <div className="popOutContainer">
          <div className="topContainer">
            <button
              className="formButton"
              type="button"
              onClick={cancelAddReview}
            >
              X
            </button>
          </div>
          <div className="firstContainer">
            <div className="midSmallContainer">
              <div className="tagContainer">
                <div className="tag">Name :</div>
                <div className="tag">Email :</div>
                <div className="tag">Description :</div>
              </div>
              <div className="textcontainer">
                { ['name', 'email', 'body'].map((i, index) => (
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <button
              type="button"
              data-testid="submitBtn"
              className="clickedButton"
              onClick={
                target==='answers'
                ?
                handleClickCheckReview(`/${id}/answers`,cancelAddReview)
                :
                handleClickCheckReview(`?product_id=${id}`,cancelAddReview)
              }
            >
              Submit
            </button>
            {target === 'answer'
            ?(
              <div>
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
            )
            :null}
          </div>
        </div>
      </div>
    </div>
  );
};

PopOutQA.propTypes = {
  target: PropTypes.string,
  id: PropTypes.any,
  addUserReview: PropTypes.func,
  cancelAddReview: PropTypes.func,
};
PopOutQA.defaultProps = {
  target: '',
  id: 1,
  addUserReview: () => 1,
  cancelAddReview: () => 1,
};


export default PopOutQA