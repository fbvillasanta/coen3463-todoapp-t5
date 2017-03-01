
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
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
                        {errors.summary && <p className="error-message">{errors.summary}</p>}
                        <div className="space-6"></div>

                        <div className="position-relative">
                            <div id="signup-box" className="signup-box visible widget-box no-border">
                                <div className="widget-body">
                                    <div className="widget-main">
                                        <h4 className="header blue lighter bigger">
                                            <i className="ace-icon fa fa-coffee green"></i>
                                            New User Registration
                                        </h4>

                                        <div className="space-6"></div>

                                        <form action="/register" onSubmit={onSubmit}>
                                            <fieldset>
                                                <label className="block clearfix">
                                                    <label>Email</label>
                                                    <span className="block input-icon input-icon-right">
                                                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={onChange} errorText={errors.email} value={user.email}/>
                                                        <i className="ace-icon fa fa-envelope"></i>
                                                    </span>
                                                </label>

                                                <label className="block clearfix">
                                                    <label>Username</label>
                                                    <span className="block input-icon input-icon-right">
                                                        <input type="text"  name="name" className="form-control" placeholder="Username" onChange={onChange} errorText={errors.name} value={user.name} />
                                                        <i className="ace-icon fa fa-user"></i>
                                                    </span>
                                                </label>

                                                <label className="block clearfix">
                                                    <label>Password</label>
                                                    <span className="block input-icon input-icon-right">
                                                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={onChange} errorText={errors.password} value={user.password}/>
                                                        <i className="ace-icon fa fa-lock"></i>
                                                    </span>
                                                </label>

                                                <label className="block clearfix">
                                                    <label>Re-type password</label>
                                                    <span className="block input-icon input-icon-right">
                                                        <input type="password" className="form-control" name="confirmPassword" placeholder="Repeat password" />
                                                        <i className="ace-icon fa fa-retweet"></i>
                                                  </span>
                                                </label>


                                                <div className="space"></div>

                                                <div className="clearfix">
                                                    <button type="reset" className="width-30 pull-left btn btn-sm">
                                                        <i className="ace-icon fa fa-refresh"></i>
                                                        <span className="bigger-110">Reset</span>
                                                    </button>

                                                    <button type="submit" className="width-65 pull-right btn btn-sm btn-success">
                                                        <span className="bigger-110">Register</span>

                                                        <i className="ace-icon fa fa-arrow-right icon-on-right"></i>
                                                    </button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="toolbar center">
                                        <Link to="/auth">
                                            <a className="back-to-login-link">
                                            <i className="ace-icon fa fa-arrow-left"></i>
                                            Back to login
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

);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
