import React from 'react';
import Answer from './Answer.jsx';


class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sortedAnswers: [],
      answers: [],
      displayA: [],
      limit: 0
    };
    this.renderPage = this.renderPage.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
    this.showAnswers = this.showAnswers.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.renderLoadMore = this.renderLoadMore.bind(this);
  }

  componentDidMount() {
    this.setState({question: this.props.question, answers: Object.entries(this.props.question.answers)},
    () => { this.sortAnswers()})
  }

  sortAnswers() {
    //console.log('got to sortQuestion function');
    var sortedAnswers = this.state.answers.sort((a,b) => a.helpfulness - b.helpfulness)
    this.setState({'sortedAnswers': sortedAnswers.reverse()}, () => {this.showAnswers()})
  }

  showAnswers(limit = 2) {
    var displayA = this.state.sortedAnswers.slice(0, limit);
    //console.log('this is display A', displayA)
    this.setState({'displayA': displayA, 'limit': limit, loaded: true})
  }

  handleLoadMore(event) {
    event.preventDefault();
      if(this.state.sortedAnswers.length > this.state.limit) {
        const LoadMore = new Promise ((resolve, reject) => this.showAnswers(Number(this.state.limit) + 4))
        LoadMore
          .then(() => render())
          .catch((err) => console.error(err));
      } else {
        const LoadMore = new Promise ((resolve, reject) => this.showAnswers(2))
        LoadMore
          .then(() => render())
          .catch((err) => console.error(err));
      }
  }

  renderLoadMore() {
    console.log('this is sorted Answers and Limit', this.state.sortedAnswers.length, ':' , this.state.limit);
    if(this.state.sortedAnswers.length === 0 || this.state.sortedAnswers.length === 2) {
      return;
    }
    if (this.state.sortedAnswers.length > this.state.limit) {
      return (
        <button className="helpful accordian" onClick={this.handleLoadMore}>
          Load More Answers
        </button>
      );
    }
    return (
      <button className="helpful accordian" onClick={this.handleLoadMore}>
        Collapse Answers
      </button>
    )
  }

  renderQuestion () {
    return (
      <div>
        <div className="accordion__section accordian">
          <button className="accordion">
            <p className="accordion__title">Q: {this.state.question.question_body}</p>
          </button>
          {this.state.displayA.length > 0 ?
            this.state.displayA.map(([key, value]) => {
              //console.log(value.body);
              return(
                <Answer answer={value.body} answerer={value.answerer_name} date={value.date} key={key}/>
              )
            }) : console.log('there are no answers')
          }
          {this.renderLoadMore()}
        </div>
      </div>
    )
  }

  renderPage() {
    if (this.state.loaded) {
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

export default QAList;