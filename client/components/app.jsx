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
      targetId: 25711//reveiws testing.
    };
    // this.fetchGET = this.fetchGET.bind(this);
    // this.getProductInfo = this.getProductInfo.bind(this);
    // this.getProductStyles = this.getProductStyles.bind(this);
    // this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.fetchEverything = this.fetchEverything.bind(this);
    this.fetchGET = this.fetchGET.bind(this);
  }

  fetchGET(string, id){
    axios.get('/get', {endpoint:`${string}/${id}`})
      .then((data) =>{
        console.log('successful get request');
        this.setState({
          list: data
          //has to set state for data.[whatever key we need from data]
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  // // get one specific product information
  // getProductInfo(id) {
  //   axios.get(`/products/${id}`)
  //     .then((response) => {
  //       this.setState({
  //         curProduct: response.data
  //       })
  //     })
  // }

  // // get one specific product's styles
  // getProductStyles(id) {
  //   axios.get(`/products/${id}/styles`)
  //   .then((response) => {
  //     this.setState({
  //       curStyles: response.data
  //     })
  //   })
  // }

  // getRelatedProducts() {
  //   axios.get(`/products/${id}/related`)
  //   .then((response) => {
  //     this.setState({
  //       relatedProducts: response.data
  //     })
  //   })
  // }

  fetchEverything() {
  //might be running async
    this.fetchGET('products', this.state.targetId);
    //await this.fetchGET('relatedItems');
    //await this.fetchGET('QA');
    //await this.fetchGET('reviews');
  }

  componentDidMount(){
    this.fetchEverything();
  }

  render(){
    //probably have to refactor this to just have the jsx components. what does everyone think?
    return (
      <div>
        {/* // <Overview />
        // <RelatedItems />
        // <QA /> */}
        <Reviews id ={this.state.targetId}/>
        <Overview view = {this.state.list}/>

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
