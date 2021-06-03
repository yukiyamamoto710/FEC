import react from 'react';
import Searchbar from './Searchbar.jsx';
import QAItem from './QAItem.jsx';

const QA = (props)=> {
  render () {
    return (
      <div>
        <Searchbar/>
        <QAItem/>
      </div>
    );
  }
}

export default QA;