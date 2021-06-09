import React from 'react';
import QAItem from './QAItem.jsx';
import AddQ from './AddQ.jsx';
import _ from 'underscore';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      questions: [],
      sortedQuestions: [],
      displayQ: [],
    };
    //this.addQuestion = this.addQuestion.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
    this.renderQA = this.renderQA.bind(this);
    this.showQuestions = this.showQuestions.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.renderLoadMoreQ = this.renderLoadMoreQ.bind(this);
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
    this.setState({'displayQ': displayQ, 'limit': limit, loaded: true}, () => {this.render()})
  }

  handleLoadMore(event) {
    event.preventDefault();
      if(this.state.sortedQuestions.length > this.state.limit) {
        const LoadMore = new Promise ((resolve, reject) => this.showQuestions(Number(this.state.limit) + 4))
        LoadMore
          .then(() => render())
          .catch((err) => console.error(err));
      } else {
        const Collapse = new Promise ((resolve, reject) => this.showQuestions(4))
        Collapse
          .then(() => render())
          .catch((err) => console.error(err));
      }
  }

  renderLoadMoreQ() {
    console.log('this is sorted Questions and Limit', this.state.sortedQuestions.length, ':' , this.state.limit);
    if(this.state.sortedQuestions.length === 0 || this.state.sortedQuestions.length === 4) {
      return;
    }
    if (this.state.sortedQuestions.length > this.state.limit) {
      return (
        <button className="loadmoreQ" onClick={this.handleLoadMore}>
          More Questions
        </button>
      );
    }
    return (
      <button className="loadmoreQ" onClick={this.handleLoadMore}>
        Collapse Questions
      </button>
    )
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
          {this.renderLoadMoreQ()}
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