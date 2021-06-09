import React from 'react';
import QAItem from './QAItem.jsx';
import AddQ from './AddQ.jsx';
import _ from 'underscore';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      sortedQuestions: [],
      displayQ: [],
    };
    //this.addQuestion = this.addQuestion.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.renderQA = this.renderQA.bind(this);
    this.showQuestions = this.showQuestions.bind(this);
  }

  componentDidMount() {
    this.setState({questions: this.props.questions.results}, () => {this.sortQuestions()})
  }

  sortQuestions() {
    var sortedQuestions = this.state.questions.sort((a,b) => a.question_helpfulness - b.question_helpfulness)
    this.setState({'sortedQuestions': sortedQuestions.reverse()}, () => {this.showQuestions()})
  }

  showQuestions (limit = 4) {
    var displayQ = this.state.sortedQuestions.slice(0, limit);
    //console.log('this is display Q', displayQ)
    this.setState({'displayQ': displayQ}, () => {this.render()})
  }

  // addQuestion(event, question){
  //   this.setState({addQuestion: question}, () => {
  //     axios.put('/put', uestion)
  //   })
  // }
  renderQA() {
    if (this.state.sortedQuestions.length > 0) {
      return (
        <div>
          {console.log('sorted questions', this.state.sortedQuestions)}
          {this.state.displayQ.map(question => <QAItem question={question} key={question.question_id}/>)}
        </div>
      )
    } else {
      return (
        <div>
          sortedQuestions did not load yet
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>
        <br/>
        <AddQ/>
        <br/>
        {this.renderQA()}
      </div>
    )
  }
}
export default QA;