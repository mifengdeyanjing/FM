import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import store from "../store"
class FenItem extends Component {
 
 state={
   current:0
 }
  render() {
    let {fendata} = this.props;
    let {current} = this.state;
    return (
     <div className="fenItembox">
         <div className="shang">
              {
                fendata&&fendata.map((item,index)=>{
                return  <span key={index} onClick={this.btnFn.bind(this,index)} className={current==index?"active":""}>{item.navTitle}</span>                    
                })
              }
         </div>
        <div className="xia">
              {
                // console.log(fendata&&fendata[current].content,"1")
                fendata&&fendata[current].content.map((item,index)=><li key={index} onClick={this.goDetail.bind(this,item.id,item)}>
                    <div className="left">
                      <img src={item.poster}/>
                    </div>
                    <div className="right">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <p>>{item.views}万次</p>
                      <p>❤共{item.ji}集</p>
                    </div>
                </li>)
              }
             
        </div>
    </div>
     
    );
  }
  btnFn(index){
    this.setState({current:index})
  }
  goDetail(id,item){
      store.dispatch({
          type:"TIAO",
          item
      })
      this.props.history.push({
      pathname:'/detail/'+id
    })
  }
 
}

export default withRouter(FenItem);