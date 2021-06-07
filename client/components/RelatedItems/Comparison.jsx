import React from 'react';
import axios from 'axios';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/get', {params: {endpoint: `products/${this.props.id}`}})
      .then((results) => {
        this.setState({
          currentItem: results.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleClick() {
    this.props.togglePop();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>Comparing</p>
          <table>
            <thead>
              <tr className="column">
                <th className="col1">{this.props.product.name}</th>
                <th colSpan="2" className="column-2">{null}</th>
                <th className="col3">{!this.state.currentItem ? null: this.state.currentItem.name}</th>
              </tr>
            </thead>
            <tbody className="comparison">
              <tr>
                <td className="col1">&#10003;</td>
                <td colSpan="2">some description</td>
                <td className="col3">&#10003;</td>
              </tr>
              <tr>
                <td className="col1">&#10003;</td>
                <td colSpan="2">some description</td>
                <td className="col3">{null}</td>
              </tr>
              <tr>
                <td className="col1">{null}</td>
                <td colSpan="2">some description</td>
                <td className="col3">&#10003;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

// Comparison.propTypes = {
//   id: 'number',
//   togglePop: 'func',
//   product: 'string'
// }

export default Comparison;
