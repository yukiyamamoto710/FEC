import React from 'react';
import QAItem from './QAItem.jsx';
import AddQ from './AddQ.jsx';
import _ from 'underscore';


class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    //this.addQuestion = this.addQuestion.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
  }

  componentDidMount() {
    this.setState({questions: this.props.questions.results}, () => {this.sortQuestions()})
  }

  sortQuestions() {
    console.log('got to sortQuestion function');
    //_.sortBy(this.state.questions, (question) => {question.question_helfulness})
    // const sortedQuestions = new Promise ((resolve, reject) => {_.sortBy(this.state.questions, (question) => {question.question_helfulness})});
    // console.log(sortedQuestions)
    // sortedQuestions
    //   .then((sortedQuestions) => {this.setState({sortedQuestions: sortedQuestions})})
    //   .then(() => {console.log('this is sorted Questions', this.state.sortedQuestions)})

    //   .catch((err) => {console.error(err)});

    let sortedQuestions = this.state.questions.sort((a,b) => a.question_helfulness - b.question_helfulness)
    this.setState({sortedQuestions: sortedQuestions}, () => {console.log("STATE",this.state.sortedQuestions)})
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
        {this.state.questions.map(question => <QAItem question={question} key={question.question_id}/>)}
      </div>
    )
  }
}
export default QA;