import React from 'react'
import { Switch, Route  } from 'react-router-dom';
import Dashboard from "./Dashboard";
import User from './Nhanvien';
 
import Khachhang from './Khachhang'
import Danhsachphong from './Danhsachphong';
function Content(){
    return(
        <Switch>
          <div className="content">
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/user" component={User}/>  
            <Route exact path="/khachhang" component={Khachhang}/>
            <Route exact path="/danhsachphong" component={Danhsachphong}/>
          </div> 
        </Switch>
    )
}

export default Content