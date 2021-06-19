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
  const txt =this.state.search
  if (txt.length >= 3) {
    const arr = [...this.state.list];
    const arr1 = arr.filter((i)=>{
      const myName = i.name.toLowerCase();
      return myName.includes(txt.toLowerCase())
    })
    sessionStorage.setItem('listSearch',JSON.stringify(arr1));
    sessionStorage.setItem('isSearch',JSON.stringify({isSearch:true}));
  }
}

idGet(event){
  const id = event.target.id;
  sessionStorage.setItem('isSearch',JSON.stringify({isSearch:false}));
  window.location.assign(`http://localhost:3000/?product_id=${id}`)
}