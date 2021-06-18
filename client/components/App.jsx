import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews1.jsx';
// import QA from './QA/QA.jsx';
import QA from './Reviews/QA/Qa.jsx';
import Search from './Search';
import MonkeyQA from './Reviews/QA/MonkeyQA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetId: 25167,
      currentItem: {},
      loaded: false,
      list:[],
      search: '',
      isSearch: '0',
      isEnter: 0,
      listSearch:[],
    };
    this.renderPage = this.renderPage.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
    this.search = this.search.bind(this);
    this.submit = this.submit.bind(this);
    this.enter = this.enter.bind(this);
    this.isGet = this.isGet.bind(this);
  }

  componentDidMount(){
    var query = window.location.search
    console.log('this is query', query);
    var queryId = query.slice(query.length - 5);
    var productId = !queryId ? 25167: Number(queryId);


    let data = sessionStorage.getItem('list');
    let data1 = [];
    let bool = sessionStorage.getItem('isSearch');
    console.log(bool,'ereasd')
    if(bool !== 'null'){
      if(bool === '0') {
        bool = '0'
      } else {
        bool = '1'
      }
    }else {
      bool = '0'
    }

    if (data !== null) {
      data1 = data1.concat(JSON.parse(data))
    }
    // console.log(data1,'s')

    let homepage = sessionStorage.getItem('isEnter');
    homepage = JSON.parse(homepage);
    console.log(typeof(homepage), homepage,'home')
    axios.get(`/getAll/${productId}`)
      .then((response) => {
        this.setState({
          list:[...data1,response.data],
          targetId: !queryId ? 25167: Number(queryId),
          currentItem: response.data,
          loaded: true,
          // isSearch: bool,
          isEnter: homepage.isEnter,
        })
      })
      .catch((err) => {
        console.log(err);
      })

      let page = Math.floor(data1.length/10) + 1
      axios.get(`/getAllItems/${page}`)
        .then(res => {
          console.log(res.data,'ds')
          let data2 = data1.filter((i)=>{
            //res.data ->array
            // need to find a way to take out same id
            return i.id !== res.data.id
          })

          data2 = data2.concat(res.data)
          console.log(data2,'data2')
          sessionStorage.setItem('list',JSON.stringify(data2))
        })
        .catch(console.log)
  }

  changeProductId(id) {
    window.location.assign(`http://localhost:3000/?product_id=${id}`)
  }

  search(event){
    let text = event.target.value
    if(text.length >= 3) {
      this.setState({
        search: text,
      })
    }
  }

  submit() {
    console.log(this.state.list,'sdad')
    const txt =this.state.search
    if (txt.length >= 3) {
      sessionStorage.setItem('isSearch','1');
      const arr = [...this.state.list];
      const arr1 = arr.filter((i)=>{
        const myName = i.name.toLowerCase();
        return myName.includes(txt.toLowerCase())
      })

      console.log(arr1,'arr1')
      this.setState({
        listSearch: arr1,
        isSearch: '1',
      })
    }
  }

  enter(){
    sessionStorage.setItem('isEnter', JSON.stringify({isEnter:1}));
    this.setState({
      isEnter:1,
    })
  }

  isGet(event){
    const id = event.target.id;
    this.state({
      targetId:id
    })
  }
  renderPage() {
    console.log(this.state.isEnter,'asdasdasd')
    if(this.state.isEnter !== 0) {
      if (this.state.loaded) {
        if (this.state.isSearch === '1') {
          return <Search listSearch={this.state.listSearch} idGet={this.idGet}/>
        } else{
          return (
          <div>
            <Header search={this.search} submit={this.submit}/>
            <Overview id = {this.state.targetId} item = {this.state.currentItem} rating = {this.state.currentItem.rating}/>
            <RelatedItems id={this.state.targetId} changeProductId={this.changeProductId} currentItem={this.state.currentItem}/>
            <QA id ={this.state.targetId}/>
            <Reviews id={this.state.targetId} productRating={this.state.currentItem} />
          </div>
        )}
      } else {
        return (
          <div>
            Page Loading ...
          </div>
        );
      }
    }else {
      return (
        <div>
          <MonkeyQA />
          <button onClick={this.enter} >Enter</button>
        </div>
      )
    }
  }

  render() {
    console.log(this.state.isEnter,'deffe')
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
