import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, HashRouter, Route } from 'react-router-dom'
import {IndexRoute} from 'react-router'

const Home = () => {
    return (
      <div id="content">

          {/*==============================slider=================================*/}
          <div className="slider">
              <div className="camera_wrap">
                <div data-src="http://lymanwong.com/images/vianett2.jpg"></div>
                <div data-src="http://lymanwong.com/images/edie.jpg"></div>
                <div data-src="http://lymanwong.com/images/gazers.jpg"></div>
              </div>
          </div>
          {/* ==============================row1================================= */}
          <div className="row_1">
              <div className="container">
                  <p className="title1">Welcome to Picture Perfect by Ivon</p>
                  <p className="title2">Making people beautiful in the Bay Area</p>
                  <Link to="bio" className="btn btn-default btn-lg btn1">more</Link>
              </div>
          </div>
          {/*==============================row2=================================*/}
          <div className="row_2">
              <div className="container">
                  <div className="row">
                      <ul className="list1">
                          <li className="col-lg-4 col-md-4 col-sm-4 listbox1">
                              <div className="box1">
                                  <a href="gallery.html">
                                      <figure><img src="http://lymanwong.com/images/olymp.jpg" alt="" /></figure>
                                      <p>Celebrities</p>
                                  </a>
                              </div>
                          </li>
                          <li className="col-lg-4 col-md-4 col-sm-4 listbox2">
                              <div className="box2">
                                  <a href="gallery.html">
                                      <p>Photoshoots</p>
                                      <figure><img src="http://lymanwong.com/images/monique2.jpg" alt="" /></figure>
                                  </a>
                              </div>
                          </li>
                          <li className="col-lg-4 col-md-4 col-sm-4 listbox3">
                              <div className="box3">
                                  <a href="gallery.html">
                                      <figure><img src="http://lymanwong.com/images/sunflower.jpg" alt="" /></figure>
                                      <p>Film</p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          {/* ==============================row3================================= */}
          <div className="row_3">
              <div className="container">
                  <div className="row">
                      <ul className="list3">
                          <li className="col-lg-6 col-md-6 col-sm-6">
                              <div className="box4">
                                  <figure><img src="http://lymanwong.com/images/makeup_class3.jpg" alt="" /></figure>
                                  <div className="info1 maxheight">
                                      <p className="list3title1">Makeup Class</p>
                                      <p className="list3title3">Today's makeup class, awesome group of ladies...</p>
                                      <a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1515198948499333" className="btn-link btn-link1" target="_blank">learn more<span></span></a>
                                  </div>
                              </div>
                          </li>
                          <li className="col-lg-6 col-md-6 col-sm-6">
                              <div className="box4">
                                  <figure><img src="http://lymanwong.com/images/lashes.jpg" alt="" /></figure>
                                  <div className="info1 maxheight">
                                      <p className="list3title1">House of Lashes</p>
                                      <p className="list3title3">House of Lashes #brides #houseoflashes #bayarea #mua #bridalmakeup</p>
                                      <a href="https://www.facebook.com/ivonhernandezgarcia1/photos/a.285929528092954.75299.263696533649587/1511010798918148/?type=3" className="btn-link btn-link1" target="_blank">learn more<span></span></a>
                                  </div>
                              </div>
                          </li>
                          <li className="col-lg-6 col-md-6 col-sm-6">
                              <div className="box4">
                                  <figure><img src="http://lymanwong.com/images/girlie.jpg" alt="" /></figure>
                                  <div className="info1 maxheight">
                                      <p className="list3title1">Party Prep</p>
                                      <p className="list3title3">Today we had a busy morning! Blessed to be part of these special moments!...</p>
                                      <a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1500407803311781" className="btn-link btn-link1" target="_blank">learn more<span></span></a>
                                  </div>
                              </div>
                          </li>
                          <li className="col-lg-6 col-md-6 col-sm-6">
                              <div className="box4">
                                  <figure><img src="http://lymanwong.com/images/makeup_class4.jpg" alt="" /></figure>
                                  <div className="info1 maxheight">
                                      <p className="list3title1">Makeup Class</p>
                                      <p className="list3title3">Had an awesome makeup class today. All the ladies took lots of notes...</p>
                                      <a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1493017920717436" className="btn-link btn-link1" target="_blank">learn more<span></span></a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          {/*==============================row4=================================*/}
          <div className="row_4">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 chef row4_col">
                          <h2>About Me</h2>
                          <figure><img src="http://lymanwong.com/images/ivonworking.jpg" alt="" /></figure>
                          <p className="title3">Ivon Hernandez Garcia</p>
                          <p>I attended The Academy for Salon Professionals where I received top of the line training in Dermalogica. </p>
                          <p className="m_bot1">Attended regular private training at the Dermalogica Institute in San Francisco. I am a licenced Esthetician with a passion for Makeup Artistry!</p>
                          <Link to="bio" className="btn-link btn-link2">read more<span></span></Link>
                      </div>
                      <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-3 col-md-3 col-sm-3 row4_col">
                          <h2>Latest Services</h2>
                          <ul className="list2">
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1515198948499333" target="_blank">Makeup Class 4/29/2017</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1500407803311781" target="_blank">Party Prep 4/15/2017</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1493017920717436" target="_blank">Makeup Class 4/8/2017</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/photos/a.285929528092954.75299.263696533649587/1482789585073603/?type=3" target="_blank">Makeup Class 3/30/2017</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/photos/a.285929528092954.75299.263696533649587/1306327876053109/?type=3" target="_blank">Day of the Dead Photoshoot 11/20/2016</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/posts/1255125401173357" target="_blank">Dia De Los Muertos Photoshoot 8/26/2016</a></li>
                              <li><a href="https://www.facebook.com/ivonhernandezgarcia1/photos/a.285929528092954.75299.263696533649587/1248341998518364/?type=3" target="_blank">Wedding 8/19/2016</a></li>
                          </ul>
                      </div>
                      <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-3 col-md-3 col-sm-3 locations row4_col">
                          <h2>Location</h2>
                          <figure><img className="logofooter" src="http://lymanwong.com/images/Logo2.png" alt="" /></figure>
                          <p className="title4">Making people beautiful in the Bay Area</p>
                          <hr className="line1" />
                          <a href="mailto:ivong2000@gmail.com?subject=Mail from your website" className="btn-link btn-link3"><span></span>ivong2000@gmail.com</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )

}

export default Home
