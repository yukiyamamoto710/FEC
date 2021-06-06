import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
    )
  }
}

export default Comparison;