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
    };
    // this.fetchGET = this.fetchGET.bind(this);
    // this.getProductInfo = this.getProductInfo.bind(this);
    // this.getProductStyles = this.getProductStyles.bind(this);
    // this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  fetchGET(){
    fetch('/getdata')
      .then(res=>res.json())
      .then((data) =>{
        this.setState({
          list: data,
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

  componentDidMount(){
   this.fetchGET();
  };

  render(){
    //probably have to refactor this to just have the jsx components. what does everyone think?
    return (
      <div>
        {this.state.list.map((i,index)=>{
          return (
            <div key = {i.id}>
              {i.name}
            </div>
          )
        })}
        <Overview view = {this.state.list}/>
        <RelatedItems />

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
