import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      answer: 'not loaded yet',
    };
  }

  componentDidMount () {
    this.setState({answer: this.props.answer}, () => {this.setState({loaded: true})})
  }

  renderPage() {
    if (this.state.loaded) {
      return (
        <div>
          Answer: {answer ? answer : 'this answer does not exist'}
        </div>
      )
    } else {
      console.log('answers render page is loading')
    }
  }

  render() {
    //console.log("ANSWERBODY", this.state.answer)
    return (
      <div>
        {this.state.answer ? this.state.answer : null}
      </div>
    )
  }
}

export default Answer;