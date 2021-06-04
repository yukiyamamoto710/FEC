import react from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        Question:
        {this.props.QA.question} <br/>
        Answer:
        {this.props.QA.answer} <br/>
      </div>

    );
  }
}

export default Searchbar;