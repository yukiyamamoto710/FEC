import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews1.jsx';
// import QA from './QA/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      targetId: 25167,
      styles: [],
      loaded: false,
      productRating: {}
    };
    // this.fetchGET = this.fetchGET.bind(this);
    this.renderPage = this.renderPage.bind(this);
    // this.fetchEverything = this.fetchEverything.bind(this);
    this.testing = this.testing.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
  }

  componentDidMount(){
    var query = window.location.search
    console.log('this is query', query);
    var queryId = query.slice(query.length - 5);
    this.setState({
      targetId: !queryId ? 25167: Number(queryId),
      loaded: true
    })

    this.fetchEverything();

  }


  fetchEverything() {
    this.ratingGET('reviews/meta', this.state.targetId);
    //this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
    //this.fetchGET('products', this.state.targetId, 'list');
  }



  ratingGET(string, id) {
    axios.get( '/get', {
      params: {
        endpoint: `${ string }/?product_id=${ id }`
      }})
      .then( res =>{
        console.log('res data', res.data)
        this.setState({
          productRating: res.data,
          loaded: true,
        });
      })
      .catch( err => console.log );
  };

  testing() {
    if (this.state.targetId === 25821) {
      this.setState({
        targetId: 25711,
      });
    } else {
      this.setState({
        targetId: 25821,
      });
    }
  }

  changeProductId(id) {
    this.setState({
      targetId: id,
    });
    window.location.assign(`http://localhost:3000/?product_id=${id}`);
  }

  renderPage() {
    if (this.state.loaded) {
      return (
        <div>
          <Header />
          <Overview id = {this.state.targetId} rating = {this.state.productRating}/>
          <RelatedItems id={this.state.targetId} changeProductId={this.changeProductId}/>
          {/* <QA id={this.state.targetId} questions={this.state.questions}/> */}
          <Reviews id={this.state.targetId} />
        </div>
      );
    }
    return (
      <div>
        Page Loading ...
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        <button onClick={this.testing}> TESTING </button>
      </div>
    );
  }
}

export default App;
