import {createStore} from "redux"

let reducer =(state={list:[],detaildata:{},arr:[]},action)=>{
    let newState = {...state}
    switch(action.type){
      case "ADD":newState.list=action.data
        return newState;
      case "TIAO":newState.detaildata=action.item
        return newState;
      case "SHOU":newState.detaildata.flag=true;
        return newState;
      case "XIAN":
        let a=newState.arr.findIndex(item=>item.id==action.shu.id)
        if(a==-1){
          newState.arr.push(action.shu)
        }
        return newState; 
      case "YISHOU":newState.detaildata.flag=false;
        default:return newState;
    }
}
let store = createStore(reducer)
window.store=store;
export default store