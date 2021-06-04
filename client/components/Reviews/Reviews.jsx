import React from 'react';
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
    this.fetchGET = this.fetchGET.bind(this);
  }

  componentDidMount(){
    let targetId = this.props.id;
    this.fetchGET(`/getreviews/${targetId}`,'target','list');
    this.setState({
      llst: targetId,
    })
  };

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetid = this.props.id;
        this.setState({
          id : targetid,
        })
    }
  };

  fetchGET(url){
    fetch(url)
      .then(res=>res.json())
      .then((data) =>{
        this.setState({
          [arguments[1]]: data,
          [arguments[2]]: data.results,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  render(){
    const { list } = this.state
    //console.log(list)
    return (
      <div style = { base }>
        <Rating />
        <Rbase list = { list }/>

      </div>
    )
  }
}

export default Reviews

const base = {
  display: 'flex',
  size: 'auto',
  justifyContent:'center'
}