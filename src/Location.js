import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, HashRouter, Route } from 'react-router-dom'
import {IndexRoute} from 'react-router'

const Location = () => {
    return (
      <div id="content">
          {/*--==============================row8=================================--*/}
          <div className="row_8">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 gmap">
                        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98568989686!2d-122.50781180290305!3d37.75781489480267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1503954067763"></iframe></div>

                      </div>
                   </div>
                   <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 address">
                          <h2>Information</h2>
                          <address>
                              <div className="info">
                                  <strong>Serving the Bay Area</strong>
                                  <p><span>Telephone:</span> +1 408 910 1234</p>
                                  <p><span>Email:</span><a href="mailto:ivong2000@gmail.com?subject=Mail from your website" className="btn-link btn-link3">ivong2000@gmail.com</a></p>
                              </div>
                          </address>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 address">
                          {/*}
                          <h2>Contact Form</h2>
                          <form id="contact-form" className="contact-form">
                            <div className="success"> Contact form submitted! <strong>We will be in touch soon.</strong> </div>
                            <fieldset>
                              <div className="coll-1">
                                <div className="txt-form">Name<span>*</span></div>
                                <label className="name">
                                  <input type="text" value="Name*:"/><br/>
                                  <span className="error">*This is not a valid name.</span> <span className="empty">*This field is required.</span> </label>
                              </div>
                              <div className="coll-2">
                                <div className="txt-form">Email<span>:</span></div>
                                <label className="email">
                                  <input type="email" value="E-mail*:"/><br/>
                                  <span className="error">*This is not a valid email address.</span> <span className="empty">*This field is required.</span> </label>
                              </div>
                              <div className="coll-3">
                                <div className="txt-form">phone:</div>
                                <label className="phone notRequired">
                                  <input type="tel" value="Phone:"/><br/>
                                  <span className="error">*This is not a valid phone number.</span> <span className="empty">*This field is required.</span> </label>
                              </div>
                              <div className="clear"></div>
                              <div>
                                <div className="txt-form">Comment<span>*</span></div>
                                <label className="message">
                                  <textarea>Message*:</textarea><br/>
                                  <span className="error">*The message is too short.</span> <span className="empty">*This field is required.</span> </label>
                              </div>
                              <div className="clear"></div>
                            </fieldset>
                            <div className="buttons-wrapper clearfix"><a href="#" className="btn-link btn-link2" data-type="submit">submit<span></span></a><strong>*REQUIRED FIELDS</strong></div>
                          </form>
                        */}
                      </div>
                   </div>
              </div>
          </div>
      </div>
    )
}

export default Location
