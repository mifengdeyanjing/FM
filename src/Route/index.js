import React, { Component } from 'react';
import "../style/style.css"
import Header from "../component/Header"
import Footer from "../component/Footer"
import Nav from "../component/nav"

import RouteList from "./RouteList"
import RouteView from "./RouteView"
import {HashRouter} from "react-router-dom"
class index extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Header/>
          <Nav/>
          <RouteView route={RouteList}></RouteView>
          <Footer/>
        </HashRouter>
        
      </div>
    );
  }
}

export default index;