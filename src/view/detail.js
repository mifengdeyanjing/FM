import React, { Component } from 'react';
import "../mock"
import axios from "axios"
import store from "../store/index"
class detail extends Component {
  constructor(props){
    super(props)
    store.subscribe(()=>{
      this.setState({})
    })
  }
  state={
    
  }
  render() {
    let shu=store.getState().detaildata;
    // console.log(shu)
    return (
      <div className="detailbox">
          {
            <div className="da">
              <div className="shang">
                <div className="zuo">
                  <img src={shu.poster}/>
                </div>
                <div className="you">
                    <h3>{shu.name}</h3> 
                    <p>{shu.desc}</p>
                </div>
              </div>
              <div className="xia">
                <span className="sp1">播放专辑</span>
                {
                  shu.flag?<span onClick={this.yishou.bind(this,shu)}>已收藏</span>:<span onClick={this.shou.bind(this,shu)}>收藏</span>
                }
                <span onClick={this.jing.bind(this,shu)}>精品</span>
              </div>
            </div>
  
          }
      </div>
    );
  }
  componentDidMount(){
  }
  yishou(){
    store.dispatch({
      type:"YISHOU",
    })
  }
  shou(shu){
    store.dispatch({
      type:"SHOU",
    })    
  }
  jing(shu){
    store.dispatch({
      type:"XIAN",
      shu
    })
  }


}

export default detail;