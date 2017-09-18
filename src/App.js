import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Link } from 'react-router-dom'
import {hashHistory, IndexRoute} from 'react-router'
import './App.css'
import Home from './Home'

export default class App extends Component{
    render(){
      return (
        <div>
            <header id="header">
              <div className="container">
                <h1 className="navbar-brand navbar-brand_"><Link to="/"><img alt="" src="/img/Lm_52a79G.png" /></Link></h1>
              </div>
              <div className="menuheader">
                  <div className="container">
                    <nav className="navbar navbar-default navbar-static-top tm_navbar" role="navigation">
                        <ul className="nav sf-menu">
                          <li className="active"><Link to="/">home</Link></li>
                          <li><Link to="/bio">about me</Link></li>
                          <li><a href="gallery.html">gallery</a></li>
                          {/* <li><Link to="links">links</Link></li> */}
                          <li><Link to="/location">location</Link></li>
                        </ul>
                    </nav>
                  </div>
              </div>
            </header>
            <div className="contents">
                {this.props.children}
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 footercol">
                            <ul className="social_icons clearfix">
                                 <li><a href="https://www.facebook.com/ivonhernandezgarcia1/" target="_blank"><img src="http://lymanwong.com/images/follow_icon1.png" alt="" /></a></li>
                                 <li><a href="https://plus.google.com/116457184508702826964" target="_blank"><img src="http://lymanwong.com/images/follow_icon2.png" alt="" /></a></li>
                                 {/*<li><a href="#"><img src="img/follow_icon3.png" alt="" /></a></li>
                                 <li><a href="#"><img src="img/follow_icon4.png" alt="" /></a></li>*/}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 footerlogo footercol">
                            <Link to="/" className="smalllogo2 logo"><img src="/img/Lm_52a79G.png" alt="" /></Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 footercol">
                            <p className="footerpriv">&copy; 2017 &bull; <Link to="privacy" className="privacylink">Privacy policy</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        )
      }
    };
