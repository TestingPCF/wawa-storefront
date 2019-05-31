import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assests/logo.png';
class HeaderComponent extends Component {
    
    render() { 
        return ( 
        <React.Fragment>
        <header className="main-header">
            <div  className="header-container-top">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-6">
                            <div  className="logo">
                                <a>
                                    <img src={logo}  alt=""/>
                                </a>
                            </div>
                        </div>
                        <div  className="col-lg-6">
                            <div  className="header-top-section">
                                <div  className="time-day">
                                    <label htmlFor="">Time of Day</label>
                                    <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Demo</option>
                                    <option value="">Demo</option>
                                </select>
                                </div>
                                <div  className="header-links">
                                    <ul>
                                        <li><a >Shipping & Returns</a></li>
                                        <li><a >Helps</a></li>
                                        <li><a >Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="header-bottom-container">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-10">
                            <nav  className="navbar navbar-expand-lg">
                                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span  className="navbar-toggler-icon"></span>
                            </button>
                                <div  className="collapse navbar-collapse" id="navbarNav">
                                    <ul  className="navbar-nav">
                                        <li  className="nav-item">
                                            <a  className="nav-link" href="#">Alcohol</a>
                                        </li>
                                        <li  className="nav-item">
                                        <NavLink className="nav-link" to="/beverage">
                                              Beverages <span className="sr-only">(current)</span>
                                        </NavLink>
                                        </li>
                                        <li  className="nav-item">
                                            <a  className="nav-link" href="#">Catering</a>
                                        </li>
                                        <li  className="nav-item">
                                            <a  className="nav-link" href="#">Coffee Subscription</a>
                                        </li>
                                        <li  className="nav-item">
                                        <NavLink className="nav-link" to="/hoagies">
                                             Hoagies and sandwiches
                                        </NavLink>
                                        </li>
                                        <li  className="nav-item">
                                            <a  className="nav-link" href="#">Sides</a>
                                        </li>
                                        <li  className="nav-item">
                                            <a  className="nav-link" href="#">Premade</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div  className="col-lg-2">
                            <div  className="search-account-card">
                                <a href="javascript: void(0)"  className="search"><i  className="fas fa-search"></i></a>
                                <a href="javascript: void(0)"  className="account"><i  className="fas fa-user-circle"></i></a>
                                <a href="javascript: void(0)"  className="cart"><i  className="fas fa-shopping-bag"></i><span  className="item-count">0</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </header>
        </React.Fragment>
      );
    }
}
 
export default HeaderComponent;