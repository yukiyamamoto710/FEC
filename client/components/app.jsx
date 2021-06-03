import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
    };
    this.fetchGET = this.fetchGET.bind(this);
  }

  fetchGET(){
    fetch('/getdata')
      .then(res=>res.json())
      .then((data) =>{
        this.setState({
          list: data,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  componentDidMount(){
   this.fetchGET();
  };

  render(){
    return (
      <div>
        {this.state.list.map((i,index)=>{
          return (
            <div key = {index}>
              {i.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;