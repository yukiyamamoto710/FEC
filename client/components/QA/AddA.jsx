import React from 'react';

class AddA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleChange = this.handleClick.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  renderPage() {
    if(this.state.clicked) {
      return (
        <div>
          Add Answer:
          <form onSubmit={this.handleSubmit}>
            <input placeholder='Add Answer' name='answer' value={this.state.answer} onChange={this.handleChange}/>
            <button>Add</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <button>Add Answer</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default AddA;