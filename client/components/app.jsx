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
<<<<<<< HEAD
        {/* // <Overview />
        // <RelatedItems />
        // <QA /> */}
        <Reviews id ={this.state.targetId}/>
=======
        {this.state.list.map((i,index)=>{
          return (
            <div key = {i.id}>
              {i.name}
            </div>
          )
        })}
        <Overview view = {this.state.list}/>

>>>>>>> eeb518c0fe3f1dd44047dc43b39abb44d7b7d1b0
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
