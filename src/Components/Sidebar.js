import React from 'react'
import {Link } from 'react-router-dom';
function Sidebar(){
    return (
      <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
          <div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text logo-normal">
              Royal Family
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active ">
                <Link className="nav-link" to="/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/user">
                  <i className="material-icons">person</i>
                  <p>Quản lý nhân viên</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/khachhang">
                  <i className="material-icons">content_paste</i>
                  <p>Quản lý khách hàng</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/danhsachphong">
                  <i className="material-icons">library_books</i>
                  <p>Danh mục phòng</p>
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./icons.html">
                  <i className="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./map.html">
                  <i className="material-icons">location_ons</i>
                  <p>Maps</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./notifications.html">
                  <i className="material-icons">notifications</i>
                  <p>Notifications</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./rtl.html">
                  <i className="material-icons">language</i>
                  <p>RTL Support</p>
                </a>
              </li>
               
            </ul>
          </div>
      </div>
    
    )
        
}
export default Sidebar
