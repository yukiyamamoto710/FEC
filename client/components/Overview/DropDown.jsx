/* eslint-disable react/prop-types */
import React from 'react';
import DropDownSelection from './DropDownSelection.jsx'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showSize = this.showSize.bind(this);
    this.showQuantity = this.showQuantity.bind(this);
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  storeSize(size) {
    this.props.callback(size);
  }

  showSize(name) {
    var objKeys = Object.keys(this.props.skus);

    return(
      <div className = 'dropdown'>
        <button onClick = {this.handleClick} className = 'dropbtn'>{this.props.name}
          <div className = {name}>
            {objKeys.map((item, index) => {
              return(
                <DropDownSelection key = {index} size = {this.props.skus[item].size} callback = {this.storeSize}/>
              )
            })}
          </div>
        </button>
      </div>
    )
  }

  showQuantity(name) {
    return(
      <div className = 'dropdown'>
        <button onClick = {this.handleClick} className = 'dropbtn'>{this.props.name}
          <div className = {name}>
            {}
          </div>
        </button>
      </div>
    )
  }

  render() {
    var name;
    //console.log('this is skus', this.props.skus);
    if(this.state.clicked === false) {
      name = 'dropdown-content'
    } else {
      name = 'show-content'
    }
    if(this.props.name === 'Select Size v') {
      return(
        this.showSize(name)
      );
    } else {
      return(
        this.showQuantity(name)
      );
    }

  }
}








export default DropDown;