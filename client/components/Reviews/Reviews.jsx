import React from 'react';
import axios from 'axios';
import Rbase from './rbase.jsx';
import Rating from './rating.jsx';

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      list: [],
      rating:'',
    };
    this.reviewsGET = this.reviewsGET.bind(this);
    this.ratingGET = this.ratingGET.bind(this);
    this.sort = this.sort.bind(this);
    this.helpful = this.helpful.bind(this);
    this.report = this.report.bind(this);
  }

  componentDidMount(){
    let targetId = this.props.id;
    this.setState({
      id: targetId,
    })
    this.ratingGET('reviews/meta',targetId);
    this.reviewsGET(`reviews`,targetId, 10, 'newest');
  };

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetId = this.props.id;
        this.setState({
          id : targetId,
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
        console.log(res.data,'sa');
        this.setState({
          list: res.data.results
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
        console.log(res.data,'sad');
        this.setState({
          rating: res.data.results
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  sort(target){
    let id = this.state.id;
    let num = this.state.list.length;
    this.reviewsGET('reviews', id, num, target)
  };

  helpful(target){
    let arr = this.state.list.slice();
    arr[target].helpfulness++;
    //shoudl limit report time with user system
    //should have a put req
    //but not databse to change.
    //use arr[target].proudce_id and PUT /reviews/:review_id/helpful
    this.setState({
      list: arr,
      help: false,
    });
  };

  report(target){
    let arr = this.state.list.slice();
    //shoudl limit report time with user system
    //should have a put req
    //but not databse to change.
    //use arr[target].proudce_id and PUT /reviews/:review_id/helpful
    //no setState
  }



  render(){
    const { list } = this.state
    return (
      <div>
        <div>RATINGS REVIEWS</div>
        <div style = { base }>
          <Rating />
          <Rbase
            list = { list }
            func = {this.sort}
            func1 ={this.helpful}
            func2 ={this.report}/>
        </div>
      </div>
    )
  }
}

export default Reviews;

const base = {
  display: 'flex',
  size: 'auto',
  justifyContent:'center',
}