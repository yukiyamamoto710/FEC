import React from 'react';
import axios from 'axios';
import Rbase from './rbase.jsx';
import Rating from './rating.jsx';

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productId: '',
      reviewsList: [],
      productRating:'',
      add: false,
      newReview: {
          body: '',
          date: '',
          helpfulness: 0,
          photos: [],
          rating: 1,
          recommend: true,
          response: null,
          reviewer_name: '',
          summary: '',
        },
      rvGet: false,
      rtGet: false,
    };
    this.reviewsGET = this.reviewsGET.bind(this);
    this.ratingGET = this.ratingGET.bind(this);
    this.sort = this.sort.bind(this);
    this.helpful = this.helpful.bind(this);
    this.report = this.report.bind(this);
    this.add = this.add.bind(this);
    this.more = this.more.bind(this);
    this.getTarget = this.getTarget.bind(this);
    this.addReview = this.addReview.bind(this);
    this.loading = this.loading.bind(this);
  }

  componentDidMount(){
    let targetId = this.props.id;
    this.setState({
      productId: targetId,
    })
    this.ratingGET('reviews/meta',targetId);
    this.reviewsGET(`reviews`,targetId, 2, 'newest');
  };

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetId = this.props.id;
        this.setState({
          productId : targetId,
          rvGet: false,
          rtGet: false,
        })
    this.ratingGET('reviews/meta',targetId);
    this.reviewsGET('reviews', targetId, 2, 'newest');
    }
  };

  reviewsGET(string, id, count, sort){
    axios.get('/get', {
      params: {
        endpoint: `${string}/?product_id=${id}&count=${count}&sort=${sort}`
      }})
      .then((res) =>{
        this.setState({
          reviewsList: res.data.results,
          rvGet: true,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  ratingGET(string, id){
    axios.get('/get', {
      params: {
        endpoint: `${string}/?product_id=${id}`
      }})
      .then((res) =>{
        this.setState({
          productRating: res.data,
          rtGet: true,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  sort(target){
    let id = this.state.productId;
    let num = this.state.reviewsList.length;
    this.reviewsGET('reviews', id, num, target)
  };

  helpful(target){
    let arr = this.state.reviewsList.slice();
    arr[target].helpfulness++;
    //shoudl limit report time with user system
    //should have a put req
    //but not databse to change.
    //use arr[target].proudce_id and PUT /reviews/:review_id/helpful
    this.setState({
      reviewsList: arr,
      help: false,
    });
  };

  report(target){
    let arr = this.state.reviewsList.slice();
    //shoudl limit report time with user system
    //should have a put req
    //but not databse to change.
    //use arr[target].proudce_id and PUT /reviews/:review_id/helpful
    //no setState
  };

  add(){
    this.setState({
      add: true,
    })
  };

  more(){
    let num = this.state.reviewsList.length + 3;
    let targetId = this.state.productId;
    this.reviewsGET('reviews', targetId, num, 'newest');
  };

  getTarget(event){
    let key = event.target.id;
    let value = event.target.value;
    let obj = {...this.state.newReview};
    if (key === 'recommend'){
      if(value === 'YES'){
        value = true;
      } else {
        value = false;
      }
    }
    obj[key] = value;
    this.setState({
      newReview: obj,
    })
  };

  addReview(event){
    let obj = {...this.state.newReview};
    let a = new Date();
    let b = a.toISOString()
    obj.date = b;
    let arr = [...this.state.reviewsList];
    arr.unshift(obj);
    this.setState({
      reviewsList:arr,
      newReview: {
        body: '',
        date: '',
        helpfulness: 0,
        photos: [],
        rating: 1,
        recommend: true,
        response: null,
        reviewer_name: '',
        summary: '',
      },
      add:false,
    })
  };

  loading(){
    const { rvGet, rtGet } = this.state;
    if (rvGet === true && rtGet === true) {
      const { reviewsList, productRating } = this.state;
      return (
        <div style ={bas}>
          <div>RATINGS REVIEWS</div>
          <div style = { base }>
            <Rating
              rating = { productRating }/>
            <Rbase
              list = { reviewsList }
              sort = { this.sort }
              helpful ={ this.helpful }
              report ={ this.report }
              add = { this.state.add }
              more = { this.more }
              addfunc ={ this.add }
              getTarget = { this.getTarget }
              addReview = { this.addReview }/>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
  render(){
    return (
      <div>
        { this.loading() }
      </div>
    )
  }
}

export default Reviews;

const base = {
  display: 'flex',
  justifyContent:'center',
}

const bas= {
  justifyContent: 'center',
}