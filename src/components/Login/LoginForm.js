
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
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
                                                {errors.summary && <p className="error-message">{errors.summary}</p>}
                                                <div className="space-6"></div>
                                                <form action="/" onSubmit={onSubmit}>
                                                    <fieldset>
                                                        <label className="block clearfix">
                                                            <label>Username</label>
                                                            <span className="block input-icon input-icon-right">
                                                                <input type="text" name="name" className="form-control" placeholder="Username" errorText={errors.name} onChange={onChange}
                                                                       value={user.name}/>
                                                                <i className="ace-icon fa fa-user"></i>
                                                             </span>
                                                        </label>
                                                        <label className="block clearfix">
                                                            <label>Password</label>
                                                            <span className="block input-icon input-icon-right">
                                                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={onChange}  errorText={errors.password}  value={user.password} />
                                                                <i className="ace-icon fa fa-lock"></i>
                                                            </span>
                                                        </label>
                                                        <div className="space"></div>

                                                        <div className="clearfix">
                                                            <label className="inline">
                                                                <input type="checkbox" className="ace" />
                                                                <span className="lbl"> Remember Me</span>
                                                            </label>

                                                            <button type="submit" className="width-35 pull-right btn btn-sm btn-primary">
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
                                                    <Link to="/forgot">
                                                        <a className="forgot-password-link">
                                                            <i className="ace-icon fa fa-arrow-left"></i>
                                                            I forgot my password
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <Link to="/register">
                                                      <a className="user-signup-link">
                                                           I want to register
                                                            <i className="ace-icon fa fa-arrow-right"></i>
                                                        </a>
                                                    </Link>
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
            </div>

        );
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;