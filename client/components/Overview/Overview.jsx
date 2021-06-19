/* eslint-disable react/prop-types */
import React from 'react';
import ProductImage from './ProductImage.jsx';
import axios from 'axios';
import Description from './Description.jsx';
import DefaultView from './DefaultView.jsx';
//import Stars from '../Reviews/Stars/Stars.jsx';
import Rating from '../RelatedItems/Rating.jsx';
import fetchGet from './api/fetchGet.js';
import getStyles from './api/getStyles.js';


//stateful component
//what do i need from the API? product name, product style, review
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: [],
      stylesList: [],
      mounted: false,
      index: 0,
      urlName: 'url',
      clicked: false,
      thumbIndex: 0
    }

    this.changePic = this.changePic.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    // console.log('this is props item', this.props.item);
    this.setState({
      stylesList: this.props.item,
      description: this.props.item
    });
    // fetchGet('products', this.props.id, 'description')
    //  .then((response) =>{
    //   console.log('successful get request', response.data);
    //   this.setState({
    //     description: response.data,
    //     mounted: true
    //     //has to set state for data.[whatever key we need from data]
    //     })
    //   })
    //   .then(getStyles(this.props.id)
    //     .then((response) => {
    //       this.setState({stylesList: response.data});
    //     })
    //     .catch((error) => {
    //       console.log(error) ;
    //     })
    //   )
    //   .catch(err=>{
    //     console.log(err)
    //   });

    }



  componentDidUpdate(prevProps) {
    var id = this.props.id;
    // if(this.state.stylesList.length === 0) {
    //   getStyles(id)
    //   .then((response) => {
    //     this.setState({stylesList: response.data});
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   }

    if(this.props.id !== prevProps.id) {
      fetchGet('products', this.props.id, 'description');
        getStyles(id)
        .then((response) => {
          this.setState({stylesList: response.data});
        })
        .catch((error) => {
           console.log(error);
        })
        }
     }


  // getStyles(id) {
  //   return axios('/get', {params: {endpoint: `products/${id}/styles`}});
  // }


  changePic(number) {
    this.setState({
      index: number,
      thumbIndex: 0,
      //before this state was changing between my url and my thumbnail url
      urlName: 'url'
    })
  }

  changeThumbnail(number) {

    this.setState({
      thumbIndex: number,
      urlName: 'thumbnail_url'
    })
  }

  scroll() {
    console.log('clicked');
    window.scrollTo(0,document.body.scrollHeight - document.querySelector(".rating").scrollHeight);
  }

  renderItems() {
      //const { category, name, id, slogan, description, features } = this.state.description;
      const currentItem = this.state.stylesList.results;
      //console.log(this.state.stylesList);
      var price;
      var salePrice;
      var styleItem = currentItem[this.state.index].name;

      if(currentItem[this.state.index].sale_price !== null) {
        salePrice = <div>{currentItem[this.state.index].sale_price}</div>;
        price = <div style = {crossed}>{currentItem[this.state.index].original_price}</div>
      } else {
        salePrice = <div></div>
        price = <div>{currentItem[this.state.index].original_price}</div>
      }

      return(
        <div className = 'wrapper'>
          <div className = 'ratingOverview'>
            <Rating rating = {this.props.item.ratings}/>
            <div className = 'readallreviews' onClick = {this.scroll} >Read All Reviews</div>
          </div>
         <DefaultView picture = {currentItem[this.state.index].photos[this.state.thumbIndex][this.state.urlName]} styleObj = {currentItem[this.state.index]} callback = {this.changeThumbnail} index = {this.state.thumbIndex}/>
         <Description descriptions = {this.state.description} style = {currentItem[this.state.index]} skus = {currentItem[this.state.index].skus} price = {price} salePrice = {salePrice} styleItem = {styleItem}/>
         <div className = 'styles'>
           <h3 className = 'headerStyles'>Styles</h3>
           <div data-testid = 'stylesBox' className = 'stylesBox'>
           {currentItem.map((item, index) => {
             return <ProductImage image = {item.photos[0]} order = {index} price = {item} callback = {this.changePic} key = {item.style_id}/>
           })}
           </div>
         </div>
        </div>
       );
  }


  render() {
    //have to to map through the styles array we get back
    //console.log('this is STATE', this.state.stylesList);
    if(this.state.stylesList.length === 0) {
      // console.log(this.state.description);
      return (
       <div>LOADING</div>
      );
    } else {
      return (
        this.renderItems()
      );
     }
  }
}



export default Overview;

const crossed = {
  textDecoration: 'line-through',
  color: 'red'
}

const highlighted = {
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'grey'
}