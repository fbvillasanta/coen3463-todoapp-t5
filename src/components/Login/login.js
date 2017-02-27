import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div className="main-container">
        <div className="main-content">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="login-container">
                <div className="center">
                  <h1>
                    <i className="ace-icon fa fa-check-square-o red"></i>
                    <span className="red">Just</span>
                    <span className="green">Do</span>
                    <span className="white" id="id-text2">IT</span>
                  </h1>
                  <h4 className="blue" id="id-company-text">a ToDo List Application</h4>
                </div>

                <div className="space-6"></div>

                <div className="position-relative">
                  <div id="login-box" className="login-box visible widget-box no-border">
                    <div className="widget-body">
                      <div className="widget-main">
                        <h4 className="header blue lighter bigger">
                          <i className="ace-icon fa fa-coffee green"></i>
                          Please Enter Your Information
                        </h4>

                        <div className="space-6"></div>

                        <form>
                          <fieldset>
                            <label className="block clearfix">
                              <label>Username</label>
                              <span className="block input-icon input-icon-right">
                                <input type="text" className="form-control" placeholder="Username" />
                                <i className="ace-icon fa fa-user"></i>
                              </span>
                            </label>

                            <label className="block clearfix">
                              <label>Password</label>
                              <span className="block input-icon input-icon-right">
                                <input type="password" className="form-control" placeholder="Password" />
                                <i className="ace-icon fa fa-lock"></i>
                              </span>
                            </label>

                            <div className="space"></div>

                            <div className="clearfix">
                              <label className="inline">
                                <input type="checkbox" className="ace" />
                                <span className="lbl"> Remember Me</span>
                              </label>

                              <button type="button" className="width-35 pull-right btn btn-sm btn-primary">
                                <i className="ace-icon fa fa-key"></i>
                                <span className="bigger-110">Login</span>
                              </button>
                            </div>

                            <div className="space-4"></div>
                          </fieldset>
                        </form>

                        <div className="social-or-login center">
                          <span className="bigger-110">Or Login Using</span>
                        </div>

                        <div className="space-6"></div>

                        <div className="social-login center">
                          <a className="btn btn-primary">
                            <i className="ace-icon fa fa-facebook"></i>
                          </a>

                          <a className="btn btn-info">
                            <i className="ace-icon fa fa-twitter"></i>
                          </a>

                          <a className="btn btn-danger">
                            <i className="ace-icon fa fa-google-plus"></i>
                          </a>
                        </div>
                      </div>

                      <div className="toolbar clearfix">
                        <div>
                          <a href="#" data-target="#forgot-box" className="forgot-password-link">
                            <i className="ace-icon fa fa-arrow-left"></i>
                            I forgot my password
                          </a>
                        </div>

                        <div>
                          <a href="#" data-target="#signup-box" className="user-signup-link">
                            I want to register
                            <i className="ace-icon fa fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="forgot-box" className="forgot-box widget-box no-border">
                    <div className="widget-body">
                      <div className="widget-main">
                        <h4 className="header red lighter bigger">
                          <i className="ace-icon fa fa-key"></i>
                          Retrieve Password
                        </h4>

                        <div className="space-6"></div>
                        <p>
                          Enter your email and to receive instructions
                        </p>

                        <form>
                          <fieldset>
                            <label className="block clearfix">
                              <label>Email</label>
                              <span className="block input-icon input-icon-right">
                                <input type="email" className="form-control" placeholder="Email" />
                                <i className="ace-icon fa fa-envelope"></i>
                              </span>
                            </label>

                            <div className="clearfix">
                              <button type="button" className="width-35 pull-right btn btn-sm btn-danger">
                                <i className="ace-icon fa fa-lightbulb-o"></i>
                                <span className="bigger-110">Send Me!</span>
                              </button>
                            </div>
                          </fieldset>
                        </form>
                      </div>

                      <div className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                          Back to login
                          <i className="ace-icon fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="signup-box" className="signup-box widget-box no-border">
                    <div className="widget-body">
                      <div className="widget-main">
                        <h4 className="header green lighter bigger">
                          <i className="ace-icon fa fa-users blue"></i>
                          New User Registration
                        </h4>

                        <form>
                          <fieldset>
                            <label className="block clearfix">
                              <label>Email</label>
                              <span className="block input-icon input-icon-right">
                                <input type="email" className="form-control" placeholder="Email" />
                                <i className="ace-icon fa fa-envelope"></i>
                              </span>
                            </label>

                            <label className="block clearfix">
                              <label>Username</label>
                              <span className="block input-icon input-icon-right">
                                <input type="text" className="form-control" placeholder="Username" />
                                <i className="ace-icon fa fa-user"></i>
                              </span>
                            </label>

                            <label className="block clearfix">
                              <label>Password</label>
                              <span className="block input-icon input-icon-right">
                                <input type="password" className="form-control" placeholder="Password" />
                                <i className="ace-icon fa fa-lock"></i>
                              </span>
                            </label>

                            <label className="block clearfix">
                              <label>Re-type password</label>
                              <span className="block input-icon input-icon-right">
                                <input type="password" className="form-control" placeholder="Repeat password" />
                                <i className="ace-icon fa fa-retweet"></i>
                              </span>
                            </label>

                            <div className="space-6"></div>
                            
                            <div className="clearfix">
                              <button type="reset" className="width-30 pull-left btn btn-sm">
                                <i className="ace-icon fa fa-refresh"></i>
                                <span className="bigger-110">Reset</span>
                              </button>

                              <button type="button" className="width-65 pull-right btn btn-sm btn-success">
                                <span className="bigger-110">Register</span>

                                <i className="ace-icon fa fa-arrow-right icon-on-right"></i>
                              </button>
                            </div>
                          </fieldset>
                        </form>
                      </div>

                      <div className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                          <i className="ace-icon fa fa-arrow-left"></i>
                          Back to login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="navbar-fixed-top align-right">
                  <br />
                  &nbsp;
                  <a id="btn-login-dark" href="#">Dark</a>
                  &nbsp;
                  <span className="blue">/</span>
                  &nbsp;
                  <a id="btn-login-blur" href="#">Blur</a>
                  &nbsp;
                  <span className="blue">/</span>
                  &nbsp;
                  <a id="btn-login-light" href="#">Light</a>
                  &nbsp; &nbsp; &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
