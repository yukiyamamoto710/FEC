import React from 'react';

const Comfort =(props)=>{
  const { value } = props;
  let perce = Math.floor(value / 5 * 100)
  console.log(perce)
  const point={
    position:'absolute',
    top:'0px',
    right:`${perce}%`
  };

  return (
    <div style={ container }>
      Comfort
      <div style ={ bar }>
        <div style ={text}>
          <div style = {smallbar} />
          Poor
        </div>
        <div style ={text}>
          <div style = {smallbar} />
        </div>
        <div style ={text}>
          <div style = {smallbar} />
        </div>
        <div style ={text}>
          <div style = {smallbar} />
          Perfect
        </div>
        <div style = {point}>
          <div style = {barpoint}></div>
        </div>
      </div>
    </div>
  )
}

export default Comfort

const container ={
  fontSize:'10px',
  marginTop:'20px'
}

const bar= {
  display:'flex',
  width:'170px',
  position:'relative',
}

const smallbar= {
  width:'35px',
  height:'10px',
  margin:'2px',
  backgroundColor: 'rgb(240,240,240)',
  position:'relative',

}

const text={
  fontSize:'10px'
}

const barpoint = {
  width:'5px',
  height:  '15px',
  backgroundColor:'black',
  margin:'1px'
}