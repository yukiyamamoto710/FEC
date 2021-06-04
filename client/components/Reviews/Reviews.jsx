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
      target:'',
    };
    this.reviewsGET = this.reviewsGET.bind(this);
  }

  componentDidMount(){
    let targetId = this.props.id;
    this.reviewsGET(`reviews`,targetId, 2, 'newest');

  };

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetId = this.props.id;
        this.setState({
          id : targetId,
        })
    this.reviewsGET('reviews', targetId, 2, 'newest')
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

  render(){
    const { list } = this.state
    return (
      <div>
        <div>RATINGS REVIEWS</div>
        <div style = { base }>
          <Rating />
          <Rbase list = { list }/>
        </div>
      </div>
    )
  }
}

export default Reviews

const base = {
  display: 'flex',
  size: 'auto',
  justifyContent:'center',
}