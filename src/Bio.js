import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, HashRouter, Route } from 'react-router-dom'
import {IndexRoute} from 'react-router'

const Bio = () => {
    return (
        <div id="content">
            {/*==============================row5=================================*/}
            <div className="row_5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 reserve_table">
                            <h2>My Short Bio</h2>
                            <figure><img className="selfie" src="http://lymanwong.com/images/ivonself.jpg" alt=""/></figure>
                            <h2>Professional Makeup Artist and Licensed Esthetician</h2>
                            <h3>I attended The Academy for Salon Professionals where I received top of the line training in Dermalogica.</h3>
                            <p>Attended regular private training at the Dermalogica Institute in San Francisco. I am a licenced Esthetician with a passion for Makeup Artistry!</p>
                            <p>I've done makeup for celebrities, photoshoots, short films, fashion runways, weddings and more! I can also teach you how to apply makeup to look your best.</p>


                            <h2 className="pad_top1">My Experience</h2>
                            <h3>Celebrities</h3>
                            <p>Mariya Koroleva, 2012 U.S. Synchronized Swimming Olympian - 2012</p>
                            <br/><br/>

                            <h3>Films and Videos</h3>
                            <p>BFF Club short film 2012</p>
                            <p>We want Electro video 2011</p>
                            <br/><br/>

                            <h3>Fashion Photoshoots</h3>
                            <p>From Sometime Else 2013</p>
                            <p>My Darling Blue Eyes 2013</p>
                            <p>Monique photoshoot 2013</p>
                            <p>Regal Seperation 2013</p>
                            <p>San Francisco photoshoot 2013</p>
                            <p>40's and Lady Bird 2012</p>
                            <p>Edie Sedgwick 2012</p>
                            <p>Flower Gazers 2012</p>
                            <p>Life in Digital 2012</p>
                            <p>Six-Teas 2012</p>
                            <p>Sunflower Dances 2012</p>
                            <p>Vianett Bridal Store 2011-2012</p>
                            <p>Dia de Los Muertos 2011</p>
                            <p>Monterey photoshoot 2011</p>
                            <p>Pin up photoshoot 2011</p>
                            <br/><br/>

                            <h3>Weddings and Events</h3>
                            <p>Michelle and Jason's Wedding 2016</p>
                            <p>Whitney and Eric's Wedding 2015</p>
                            <p><a href="https://www.facebook.com/ivonhernandezgarcia1/posts/920969334588967" target="_blank">"Ivon did an amazing job on my wedding makeup! She was thoughtful and worked with me to find the right look that made me feel glowing and beautiful. Thank you for your hard work. I feel so lucky to have had you a part of the day!" -Whitney</a></p>
                            <p>Cassie and Patrick's Wedding 2014</p>
                            <p>Richardson Wedding 2014</p>
                            <p>Stephanie and Joe's Wedding 2014</p>
                            <p><a href="https://www.facebook.com/photo.php?fbid=10100466991821678&set=o.263696533649587&type=3" target="_blank">"Thank You Ivon Hernandez Garcia!! You are an amazing makeup artist and A wonderful person!!" -Stephanie</a></p>
                            <p>Bianca's Quinceanera 2011</p>
                        </div>

                        <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-4 col-md-4 col-sm-4">
                            <h2>How I Work</h2>
                            <hr className="line2" />
                            <p className="title5">I love what I do and it shows.</p>
                            <h2 className="pad_bot1">Hire Me Now</h2>
                                {/*
                                <form id="contact-form2" className="reservation-form">
                                  <div className="success">Reservation form submitted! <strong>We will be in touch soon.</strong> </div>
                                  <fieldset>
                                    <div className="coll-1">
                                      <div className="txt-form">Name<span></span></div>
                                      <label className="name">
                                        <input type="text" value="Name:"/><br/>
                                        <span className="error">*This is not a valid name.</span> <span className="empty">*This field is required.</span> </label>
                                    </div>
                                    <div className="coll-2">
                                      <div className="txt-form">Email<span>:</span></div>
                                      <label className="email">
                                        <input type="email" value="E-mail:"/><br/>
                                        <span className="error">*This is not a valid email address.</span> <span className="empty">*This field is required.</span> </label>
                                    </div>
                                    <div className="coll-3">
                                      <div className="txt-form">phone:</div>
                                      <label className="arrival notRequired">
                                        <input type="tel" value="Phone:"/><br/>
                                        <span className="error">*This is not a valid phone number.</span> <span className="empty">*This field is required.</span> </label>
                                    </div>
                                    <div className="coll-4">
                                      <div className="txt-form">phone:</div>
                                      <label className="Length of stay notRequired">
                                        <input type="tel" value="Fax:"/><br/>
                                        <span className="error">*This is not a valid phone number.</span> <span className="empty">*This field is required.</span> </label>
                                    </div>
                                    <div className="clear"></div>
                                    <div>
                                      <div className="txt-form">Comment<span>*</span></div>
                                      <label className="message">
                                        <textarea>Comments:</textarea><br/>
                                        <span className="error">*The message is too short.</span> <span className="empty">*This field is required.</span>
                                      </label>
                                    </div>
                                    <div className="clear"></div>
                                  </fieldset>
                                  <div className="buttons-wrapper clearfix">
                                    <a href="#" className="btn-link btn-link2" data-type="submit">send<span></span></a>
                                    <a href="#" className="btn-link btn-link2" data-type="reset">clear<span></span></a>
                                  </div>
                                </form>
                            */}
                            <p><span>Telephone:</span> +1 408 910 1234</p>
                            <p><span>Email:</span><a href="mailto:ivong2000@gmail.com?subject=Mail from your website" className="btn-link btn-link3"> ivong2000@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
  }

export default Bio
