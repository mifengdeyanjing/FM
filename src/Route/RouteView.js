import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom"

class RouteView extends Component {
  render() {
    let {route} = this.props;
    // console.log(route)
    return (
      <div>
        <Switch>
          {
            route.map((item,index)=>(
              item.component?<Route key={index} path={item.path} render={(props)=>(
                <item.component key={index} {...props}/>
              )}></Route>:<Redirect key={index} to={item.Redirect}/>
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default RouteView;