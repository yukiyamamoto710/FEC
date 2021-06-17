import { useEffect, useState } from 'react';
import postQA from './postQA';

export default function usePopOutQA(id, addUserReview) {

  const [photos, setPhotos]=useState([]);
  const [body, setBody] =useState('');
  const [name, setName] =useState('');
  const [email,setEmail]=useState('');
  const [listWarning, setListWarning] =useState([]);

  useEffect(()=>{
    setPhotos([]);
    setBody('');
    setName('');
    setEmail('');
  },[id])

  const handleChangeTarget = (event) => {
    const { id, value } = event.target;
    if (id === 'photos') {
      if (value !== undefined) {
        setPhotos([...photos, String(value)]);
      }
    } else if (id === 'body') {
      setBody(value);
    } else if (id === 'name') {
      setName(value);
    }else if (id === 'email') {
      setEmail(value);
    }
  };

  const handleClickCheckReview = (endPoint, targetName)=>{
    let arr = [];
    if(body.length === 0) {arr.push('Description')};
    if(name.length === 0) {arr.push('name')};
    if (!email.includes('@') || !email.includes('.')) {
      arr.push('Email');
    } else if (email.indexOf('@') >= email.indexOf('.') - 1) {
      arr.push('Email');
    } else if (email.indexOf('@') === 0 || email.indexOf('.') === email.length-1) {
      arr.push('Email');
    }

    if (arr.length > 0) {
      setListWarning(arr)
    } else {
      let obj = {};
      obj['name'] = name;
      obj['body'] = body;
      obj['email'] =email;
      if(targetName === 'answers'){
        obj['photos']= photos;
      }else {
        obj['product_id']= id;
      }
      postQA(obj, endPoint)
      obj['answerer_name'] = name;
      obj['helpfulness'] = 0;
      obj['date'] = new Date().toISOString();
      obj['id'] = Math.random() * 10000000
      console.log(obj['date']);
      addUserReview(obj)
    }
  }

  const warningcancel=()=>{
    setListWarning([]);
  }

  return {
    warningcancel,
    handleClickCheckReview,
    handleChangeTarget,
    photos,
    body,
    name,
    email,
    listWarning,
  }
}