import React from 'react';
import QAItem from './QAItem.jsx';
import AddQ from './AddQ.jsx';


class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.addQuestion = this.addQuestion.bind(this);
    this.sortQuestion = this.sortQuestion.bind(this);
  }

  componentDidMount() {
    this.setState({questions: this.props.questions}, () => {sortQuestions()})
  }

  sortQuestions() {
    var sortedQuestions = _.sortBy(this.state.questions, (question) => {question.question_helfulness})
    console.log('sorted list', sortedQuestions.reverse());
  }

  // addQuestion(event, question){
  //   this.setState({addQuestion: question}, () => {
  //     axios.put('/put', uestion)
  //   })
  // }
  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>
        <AddQ/>
        {this.state.questions.results.map(question => <QAItem question={question} key={question.question_id}/>)}
      </div>
    )
  }
}
export default QA;