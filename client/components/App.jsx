import React from 'react';
import axios from 'axios';
import Header from './Header.jsx'
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews1.jsx';
import QA from './QA/QA.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      targetId: 25167,//reveiws testing. we can initialize with a particular ID
      styles: [],
      loaded: false
    };
    this.fetchGET = this.fetchGET.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.fetchEverything = this.fetchEverything.bind(this);
    this.testing = this.testing.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
  }

  componentDidMount(){
    this.fetchEverything();
  }

  fetchGET(string, endpoint, stateName){
    return (
      axios.get('/get', {params: {endpoint: `${string}/${endpoint}`}})
      .then((response) =>{
        console.log(window.location.pathname);
        var url = window.location.pathname;
        this.setState({
          [stateName]: response.data,
          targetId: url === '/' ? 25167: Number(url.slice(1, url.length - 1))
          //has to set state for data.[whatever key we need from data]
        }, () =>this.setState({loaded: true}))
      })
      .catch(err=> console.error(err))
    );
  }

  fetchEverything() {
    this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
    // this.fetchGET('products', this.state.targetId, 'list');
  }

  testing(){
    if(this.state.targetId === 25821){
      this.setState({
        targetId:25711,
      },() =>{
        this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
      })
    }else{
      this.setState({
        targetId:25821,
      },() =>{
        this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
      })
    }
  }

  changeProductId(id) {
    this.setState({
      targetId: id,
    })
  }

  renderPage() {
    if(this.state.loaded) {
      return (
        <div>
          <Header />
          <Overview id = {this.state.targetId}/>
          <RelatedItems id={this.state.targetId} changeProductId={this.changeProductId}/>
          {/* <QA id={this.state.targetId} questions={this.state.questions}/> */}
          <Reviews id = { this.state.targetId}/>
        </div>
      )
    } else {
      return (
        <div>
          Page Loading ...
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderPage()}
        <button onClick = {this.testing}> TESTING </button>
      </div>
    )
  }
}

export default App;

