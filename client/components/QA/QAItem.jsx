import React from 'react';
import Answer from './Answer.jsx';


class QAItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.renderPage = this.renderPage.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    //this.renderAnswers = this.renderAnswers.bind(this);
  }

  componentDidMount() {
    this.setState({question: this.props.question}, () => {
      this.setState({loaded: true})
    })
  }

  renderQuestion () {
    return (
      <div>
        Question: {this.state.question.question_body !== undefined ? this.state.question.question_body : console.log('no question body')}
        <br/>
        Answers:
        {this.state.question.answers !== undefined ?
          Object.entries(this.state.question.answers).map(([key, value]) => {
            //console.log(value.body);
            return(
              <div>
                <Answer answer={value.body}/>
              </div>
            )
          }) : console.log('there are no answers')
        }
        <br/>
      </div>
    )
  }

  renderPage() {
    if(this.state.loaded) {
      return (
        <div>
          {this.renderQuestion()}
        </div>
      )
    } else {
      console.log('something went wrong with conditional render');
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default QAItem;