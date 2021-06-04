import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QA from './QA/QA.jsx';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      targetId: 25711,//reveiws testing. we can initialize with a particular ID
      styles: [],
      loaded: false
    };
    this.fetchGET = this.fetchGET.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.fetchEverything = this.fetchEverything.bind(this);

  }

  componentDidMount(){
    this.fetchEverything();
  }

  fetchGET(string, endpoint, stateName){
    return (
      axios.get('/get', {params: {endpoint: `${string}/${endpoint}`}})
      .then((response) =>{
        console.log('successful get request', `${string}/${endpoint}`);
        this.setState({
          [stateName]: response.data,
          //has to set state for data.[whatever key we need from data]
        }, () =>this.setState({loaded: true}))
      })
      .catch(err=> console.error(err))
    );
  };

  fetchEverything() {
    this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
    //this.fetchGET('products', this.state.targetId, 'list');
  }


  renderPage() {
    if(this.state.loaded) {
      return (
        <div>
          <Overview info = {this.state.list} callback = {this.productInfo} styles = {this.state.styles}/>
          <QA questions={this.state.questions}/>
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
<<<<<<< HEAD
        {this.renderPage()}
=======
        <Overview info = {this.state.list} callback = {this.productInfo} styles = {this.state.styles}/>
        <RelatedItems id={this.state.targetId} fetchGET={this.fetchGET} />
        <Reviews id ={this.state.targetId}/>
>>>>>>> df2e5669701d30b72be8745f5a3a17fb50328acb
      </div>
    )
  }
}

export default App;

