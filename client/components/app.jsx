import React from 'react';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      targetId: 25711,//reveiws testing.
    };
    this.fetchGET = this.fetchGET.bind(this);
  }

  fetchGET(){
    fetch('/getproducts')
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

  componentDidMount(){
    this.fetchGET();
  };




  render(){
    //probably have to refactor this to just have the jsx components. what does everyone think?
    return (
      <div>
        {/* // <Overview />
        // <RelatedItems />
        // <QA /> */}
        <Reviews id ={this.state.targetId}/>
        <Overview view = {this.state.list}/>

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
