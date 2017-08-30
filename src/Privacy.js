import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, HashRouter, Route } from 'react-router-dom'
import {IndexRoute} from 'react-router'

const Privacy = () => {

    return (
          <div id="content">
              {/*--==============================row9=================================--*/}
              <div className="row_9">
                  <div className="container">
                      <div className="row privacy_page">
                          <div className="col-lg-4 col-md-4 col-sm-4">
                              <h2>Terms Of Use</h2>
                              <p>This page is informational purposes. For more information or to book an appointment, please send me an email.</p>
                              {/* <p>Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultri cies pharetra magna. Donec accumsan male suada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                              <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, Ut tellus dolor, dapibus cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p> */}
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8">
                              <h2>Privacy Policy</h2>
                              <h3>I will <u>never</u> share or sell information provided to me.</h3>
                              {/* <p className="m_bot4">Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo.</p>
                              <h3>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</h3>
                              <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</p> */}
                              <p>E-mail: <a href="mailto:ivong2000@gmail.com?subject=Mail from your website" className="btn-link btn-link3"><span></span>ivong2000@gmail.com</a></p>
                          </div>
                       </div>
                  </div>
              </div>
          </div>
      )
};

export default Privacy
