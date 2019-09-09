import React, { Component } from 'react';

import "../mock"
import axios from "axios"
import store from "../store"
class my extends Component {
  
  render() { 
      let my = store.getState().arr; 
      return (
      <div className="mybox">
        <h2>我的收藏:</h2>
        {
          my.map((item,index)=><li key={index}>
            <div className="qian">
              <img src={item.poster}/>
            </div>
            <div className="hou">
              <h3>{item.name}</h3> 
              <p>{item.desc}</p>
            </div>
          </li>)
        }
      </div>
    );
  }
}

export default my;