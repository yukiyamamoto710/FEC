import React from 'react';
import QAItem from './QAItem.jsx';


class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sortedAnswers: [],
      answers: [],
      displayA: [],
    };
    this.renderPage = this.renderPage.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
    this.showAnswers = this.showAnswers.bind(this);
  }

  componentDidMount() {
    this.setState({question: this.props.question, answers: Object.entries(this.props.question.answers), loaded: true},
    () => { this.sortAnswers()})
  }

  sortAnswers() {
    console.log('got to sortQuestion function');

    var sortedAnswers = this.state.answers.sort((a,b) => a.helpfulness - b.helpfulness)
    this.setState({'sortedAnswers': sortedAnswers}, () => {this.showAnswers()})
  }

  showAnswers(limit = 2) {
    var displayA = this.state.sortedAnswers.slice(0, limit);
    //console.log('this is display A', displayA)
    this.setState({'displayA': displayA})
  }

  renderQuestion () {
    return (
      <div>
        {this.state.displayA.length > 0 ?
          this.state.displayA.map(([key, value]) => {
            //console.log(value.body);
            return(
              <div>
                <QAItem question={this.state.question.question_body} answer={value.body} answerer={value.answerer_name} date={value.date} key={key}/>
              </div>
            )
          }) : console.log('there are no answers')
        }
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

export default QAList;