import React from 'react';

class AddA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      answer: '',
      nickname: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
            <input placeholder='Enter Nickname' name='nickname' value={this.state.nickname} onChange={this.handleChange}/>
            <button>Add</button>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div style = {pop}>
        {this.renderPage()}
      </div>
    );
  }
}

export default AddA;

const pop = {
  overflow: 'visible',
  border:'1px solid black',
  position: 'absolute',
  backgroundColor:'white',
  zIndex:'98',
  display: 'flex',
  flexDirection: 'column',
}