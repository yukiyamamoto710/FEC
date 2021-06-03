import React from 'react';

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
    this.fetchGET('/getreviews','target','list');
    this.setState({
      id: targetId,
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      let targetid = this.props.id;
        this.setState({
          id : targetid,
        })
    }
  };

  fetchGET(url){
    fetch('/getreviews')
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
    return (
      <div>
        {/* {this.state.list.map((i, index)=>{
          return <div key = {index}>{i.body}</div>
        })} */}
        <button onClick={()=>console.log(this.state)}></button>
      </div>
    )
  }
}

export default Reviews