import React from 'react';
import Helpful from './Helpful.jsx';


const Answer = ({answer, answerer, date}) => {

  var d = new Date (date);
  var getMonth = (mo) => {
    if(mo === 0){
      return 'January'
    }
    if(mo === 1){
      return 'February'
    }
    if(mo === 2){
      return 'March'
    }
    if(mo === 3){
      return 'April'
    }
    if(mo === 4){
      return 'May'
    }
    if(mo === 5){
      return 'June'
    }
    if(mo === 6){
      return 'July'
    }
    if(mo === 7){
      return 'August'
    }
    if(mo === 8){
      return 'September'
    }
    if(mo === 9){
      return 'October'
    }
    if(mo === 10){
      return 'November'
    }
    if(mo === 11){
      return 'December'
    }
  };

  // return (
  //   <div>
  //     A: {answer} <br/>
  //     <span>
  //       by {answerer} <> </>
  //       {getMonth(d.getUTCMonth())} <> </> {d.getUTCDate()},<> </>{d.getUTCFullYear()}
  //       <Helpful/>
  //       <br/>
  //     </span>
  //   </div>
  // );


  return (
    <div className="accordion__content">
      <span className="accordion__title">A: </span>
      <span className="accordion__answer"> {answer}</span>
      <div className="accordion__text">
        by {answerer} | <> </>
        <span >{getMonth(d.getUTCMonth())} <> </> {d.getUTCDate()},<> </>{d.getUTCFullYear()}</span>
        <> </> |
        <Helpful/>
        <br/>
      </div>
    </div>
  );
}
export default Answer;