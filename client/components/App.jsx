import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews1.jsx';
import QA from './Reviews/QA/Qa.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetId: 25167,
      currentItem: {},
      loaded: false
    };
    this.renderPage = this.renderPage.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
  }

  componentDidMount(){
    var query = window.location.search
    console.log('this is query', query);
    var queryId = query.slice(query.length - 5);
    var productId = !queryId ? 25167: Number(queryId);

    axios.get(`/getAll/${productId}`)
      .then((response) => {
        this.setState({
          targetId: !queryId ? 25167: Number(queryId),
          currentItem: response.data,
          loaded: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeProductId(id) {
    window.location.assign(`http://localhost:3000/?product_id=${id}`)
  }

  renderPage() {
    if (this.state.loaded) {
      return (
        <div>
          <Header />
          <Overview id = {this.state.targetId} item = {this.state.currentItem} rating = {this.state.currentItem.rating}/>
          <RelatedItems id={this.state.targetId} changeProductId={this.changeProductId} currentItem={this.state.currentItem}/>
          <QA id ={this.state.targetId}/>
          <Reviews id={this.state.targetId} productRating={this.state.currentItem} />
        </div>
      )
    } else {
      return (
        <div>
          Page Loading ...
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
