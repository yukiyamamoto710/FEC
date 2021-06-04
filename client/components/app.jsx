import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      targetId: 25711,//reveiws testing. we can initialize with a particular ID
      styles: []
    };
    this.fetchEverything = this.fetchEverything.bind(this);
    this.fetchGET = this.fetchGET.bind(this);
    this.getStyles = this.getStyles.bind(this);

  }

  componentDidMount(){
    this.fetchEverything();
  }

  fetchGET(string, id){
    axios.get('/get', {
      params: {
        endpoint:`${string}/${id}`
      }},)
      .then((data) =>{
        this.setState({
          list: response.data,
          //has to set state for data.[whatever key we need from data]
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };


  //refactor later
  getStyles(string, id){
    axios.get('/getstyle', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
        console.log('successful get request', `${string}/${id}`);
        this.setState({
          styles: response.data,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  fetchEverything() {
    this.fetchGET('products', this.state.targetId);
    //this.getStyles('products', `${this.state.targetId}/styles`);
    //await this.fetchGET('relatedItems');
    //await this.fetchGET('QA');
    //await this.fetchGET('reviews');
  }

  componentDidMount(){
    this.fetchEverything();
  }


  render(){
    return (
      <div>
        <Overview info = {this.state.list} callback = {this.productInfo} styles = {this.state.styles}/>
        <RelatedItems id={this.state.targetId} fetchGET={this.fetchGET} />
        <Reviews id ={this.state.targetId}/>
      </div>
    )
  }
}

export default App;

