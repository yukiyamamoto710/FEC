import React from 'react';

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      list: [],
    };
    this.fetchGET = this.fetchGET.bind(this);
  }

  componentDidMount(){
    let targetId = this.props.id;
        this.setState({
          id: targetId,
        })
    this.fetchGET('/getreviews','list');
    console.log(this.state)
  };

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetid = this.props.id;
        this.setState({
          id : targetid,
        })
    }
  };

  fetchGET(url,state){
    fetch(url)
      .then(res=>res.json())
      .then((data) =>{
        this.setState({
          [state]: data,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  render(){
    return (
      <div>
        fe
      </div>
    )
  }
}

export default Reviews