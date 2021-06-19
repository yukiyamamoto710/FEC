import React, { useState, useEffect } from 'react';
import Message from '../Reviews/Message/Message';
import MonkeyQA from '../Reviews/QA/MonkeyQA';

const Search = (props) => {
  const { listSearch, idGet, txt } = props;
  const [category, setCategory] = useState([]);
  const [list, setList] = useState([]);
  const [templist, setTempList] = useState([]);

  useEffect(() => {
    let categoryKey = ['All', 'Price down','Price up'];
    let listArray = [];
    let searchList = listSearch.sort((a,b)=>{return a.id - b.id})
    for(let i = 0; i < searchList.length; i ++) {
      if (!categoryKey.includes(searchList[i].category)) {
        categoryKey.push(searchList[i].category)
      }
      if(i !== searchList.length-1){
        if(searchList[i].id !== searchList[i + 1].id) {
          listArray.push(searchList[i])
        }
      }
      if (i === searchList.length-1) {
        listArray.push(searchList[i])
      }
    }
    setList(listArray);
    setTempList(listArray);
    setCategory(categoryKey);
  },[listSearch.length]);

  const handleClickGategory = (event) => {
    const id = event.target.id;
    const arr = [...templist];

    if (id === 'All') {
      setList(arr);
    } else if(id === 'Price down'){
      const arr2 = arr.sort((a,b)=>Number(a.default_price) - Number(b.default_price));
      setList(arr2)
    } else if(id === 'Price up'){
      const arr3 = arr.sort((a,b)=>Number(b.default_price) - Number(a.default_price));
      setList(arr3)
    } else {
      const arr1 = arr.filter((i)=>{
        return i.category === id;
      });
      setList(arr1);
    }
  }

  let rowNum = Math.floor(list.length/4);
  if (rowNum * 4 < list.length) {
    rowNum = rowNum + 1;
  }
  let rowArray = [...Array(rowNum)];

  let colNum = Math.floor(category.length/6);
  if (colNum * 6 < category.length) {
    colNum = colNum + 1;
  }
  let colArray = [...Array(colNum)];

  if(list.length !== 0) {
    return (
      <div>
        <div className="searchbody">
          Category:
          {colArray.map((j,index)=>{
            const arr = list.slice(index*6, index*6+6)
            return (
              <div className="searchCategory" key={index}>
                {category.map((i, index)=>{
                  return (
                    <div
                      key={index}
                      type="button"
                      id={i}
                      onClick={handleClickGategory}
                      className="searchButton"
                    >
                      {i}
                    </div>)
                  })}
              </div>
            )})}
        </div>
        <div className="searchCardBody">
            {rowArray.map((j,index)=>{
              const arr = list.slice(index*4, index*4+4)
              return (
                <div className="hi" key={index}>
                  {arr.map((i)=>{
                  return(
                    <div key={i.id} >
                      <div className="searchCard">
                        Name:<Message body={i.name} />
                        Description:<Message body={i.description}/>
                        Price:  ${i.default_price} USD
                      <button
                        id={i.id}
                        className="searchButton"
                        onClick={idGet}
                      >
                        Go!
                      </button>
                    </div>
                  </div>
                  )
                 })}
                </div>
              )
            })}

          {/* {list.map((i)=>{
            return (
              <div key={i.id} >
                <div className="searchCard">
                    Name:<Message body={i.name} />
                    Description:<Message body={i.description}/>
                    Price:${i.default_price}USD
                    <button
                      id={i.id}
                      className="searchButton"
                      onClick={idGet}
                    >
                      Go!
                    </button>
                </div>
              </div>
            )
          })} */}
        </div>

      </div>
    )
  } else {
    return <MonkeyQA />
  }

}

export default Search