import React from 'react';
import axios from 'axios';
import Header from './Header.jsx'
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews1.jsx';
// import QA from './QA/QA.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      targetId: 25167,
      currentItem: {},
      loaded: false
    };
    this.renderPage = this.renderPage.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
  }

  componentDidMount(){
    var query = window.location.search
    var queryId = query.slice(query.length - 5);
    var productId = !queryId ? 25167: Number(queryId);
    var currentProduct = {};
    var storage = JSON.parse(localStorage.getItem('allproducts')) || [];
    for (var i = 0; i < storage.length; i++) {
      if (storage[i].id === productId) {
        currentProduct = storage[i];
      }
    }
    if (!currentProduct) {
      currentProduct = this.getProductInfo(productId);
      storage.unshift(currentProduct);
      localStorage.setItem('allproducts', JSON.stringify(storage));
    }

    this.setState({
      targetId: !queryId ? 25167: Number(queryId),
      currentItem: currentProduct,
      loaded: true
    })
  }

  getProductInfo(id) {
    axios.get('/get', {params: {endpoint: `products/${id}`}})
    .then((product) => {
      axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
        .then((styles) => {
          axios.get('/get', {params: {endpoint: `reviews/meta/?product_id=${id}`}})
          .then((rating) => {
            var mergedList = Object.assign(product.data, styles.data)
            mergedList['rating'] = rating.data
            return margedList;
          })
        })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  changeProductId(currentItem) {
    // this.setState({
    //   targetId: id,
    //   currentItem: currentItem
    // })
    var storage = JSON.parse(localStorage.getItem('allproducts'))
    storage.unshift(currentItem);
    localStorage.setItem('allproducts', JSON.stringify(storage));

    window.location.assign(`http://localhost:3000/?product_id=${id}`)
  }

  renderPage() {
    if(this.state.loaded) {
      return (
        <div>
          <Header />
          <Overview id = {this.state.targetId}/>
          <RelatedItems id={this.state.targetId} changeProductId={this.changeProductId} currentItem={this.state.currentItem}/>
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

    // this.fetchGET = this.fetchGET.bind(this);
    // this.fetchEverything = this.fetchEverything.bind(this);
    // this.testing = this.testing.bind(this);
  // fetchGET(string, endpoint, stateName){
  //   return (
  //     axios.get('/get', {params: {endpoint: `${string}/${endpoint}`}})
  //     .then((response) =>{
  //       this.setState({
  //         [stateName]: response.data
  //       }, () =>this.setState({loaded: true}))
  //     })
  //     .catch(err=> console.error(err))
  //   );
  // }

  // fetchEverything() {
  //   this.fetchGET('qa', `questions/?product_id=${this.state.targetId}`, 'questions');
  // }

  // testing(){
  //   if(this.state.targetId === 25821){
  //     this.setState({
  //       targetId:25711
  //     })
  //   }else{
  //     this.setState({
  //       targetId:25821
  //     });
  //   }
  // }
