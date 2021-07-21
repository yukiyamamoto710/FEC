import React from 'react';

class AddQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    //invoke the post command
  }

  render() {
    return (
      <div style={pop}>
        Add Question:
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Enter Nickname' name='asker_name' value={this.state.asker_name} onChange={this.handleChange}/>
          <input placeholder='Add A Question' name='question' value={this.state.question} onChange={this.handleChange}/>
          <button>Add</button>
          <br/>
          <a>For privacy reasons, do not use your full name or email address</a>
        </form>
      </div>
    );
  }
}

export default AddQ;

const pop = {
  position: 'absolute',
  overflow: 'visible',
  border:'1px solid black',
  backgroundColor:'white',
  display: 'flex',
  flexDirection: 'column',
}