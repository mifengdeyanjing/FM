import React, { Component } from 'react';
import axios from "axios"
import FenItem from "../component/FenItem"
import store from "../store"
class fen extends Component {
  state={
    data:[]
  }
  render() {
    let {data}  = this.state;
    return (
      <div className="fenbox">
        {        
          <FenItem fendata={data.list}></FenItem>  
        }
      </div>
    );
  }
  componentDidMount(){
    axios.get("/books").then(({data})=>{
       this.setState({data})
       store.dispatch({
         type:"ADD",
         data
       })
    })
  }
  
 
}

export default fen;