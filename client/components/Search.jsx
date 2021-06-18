import React from 'react';

const Search = (props) => {
  const { listSearch, idGet } = props;
  return (
    <div>
      {listSearch.map((i)=>{
        return (
          <button key={i.id} onClick={idGet} id={i.id}>{i.name}</button>
        )
      })}
    </div>
  )
}

export default Search