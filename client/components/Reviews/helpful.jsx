import React from 'react';
/////////need funcs
const HR =(props)=>{
  const { helpful, add, report, index } =props;
  const a = `Helpful? Yes (${helpful}) `;
  const b = ` | report`;
  const c = (event)=>{
    add(index)
  }
  const d = (event) =>{
    report(index)
  }
  return (
    <div style= {style}>
      <button style= { button } onClick = { c }>{a}</button>
      <button style= { button } onClick = { d }>{b}</button>
    </div>
  )
}

export default HR;

const style= {
  display:'flex',

}
const button ={
  borderStyle:'none',
  backgroundColor:'white',
  fontSize:'10px'
}