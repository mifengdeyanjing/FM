import React, { Component } from 'react';

import {HashRouter,NavLink} from "react-router-dom"
class nav extends Component {
  render() {
    return (
      <div className="navbox">
        <NavLink to="/my">我的</NavLink>
        <NavLink to="/re">热门</NavLink>
        <NavLink to="/fen">分类</NavLink>
        <NavLink to="/jing">精品</NavLink>
      </div>
    );
  }
}

export default nav;