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
    this.getStyles = this.getStyles.bind(this);
    this.getQA = this.getQA.bind(this);
    this.renderPage = this.renderPage.bind(this);

  }

  componentDidMount(){
    this.getQA();
  }

  fetchGET(string, id){
    axios.get('/get', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
        console.log('successful get request', `${string}/${id}`);
        this.setState({
          [string]: response.data,
          //has to set state for data.[whatever key we need from data]
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };


  //refactor later
  getStyles(string, id){
    axios.get('/get', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
        console.log('successful get request', `${string}/${id}`);
        this.setState({
          styles: response.data,
        })
      })
      .catch(err=>{
        console.error(err)
      });
  };

  getQA(){
    axios.get('/qa', {params: {id: this.state.targetId}})
      .then((response) =>{
        console.log('successful get request');
        this.setState({
          questions: response.data,
        }, () => this.setState({loaded: true}))
      })
      .catch(err=>{
        console.error(err)
      });
  };

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
        {this.renderPage()}
      </div>
    )
  }
}

export default App;


/*
put the individual components here. they are not exported yet so throwing an error
<RelatedItems />
<QA />
<Reviews />



*/
