import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div id="navbar" className="navbar navbar-default ace-save-state">
				<div className="navbar-container ace-save-state" id="navbar-container">

					<div className="navbar-header center pull-left">
						<a href="index.html" className="navbar-brand">
							<small>
								JustDoIT  
								<i className="fa fa-bolt"></i>
							</small>
						</a>
					</div>

					<div className="navbar-buttons navbar-header pull-right" role="navigation">
						<ul className="nav ace-nav">

							<li className="light-blue">
								<a data-toggle="dropdown" href="#" className="dropdown-toggle">
									<img className="nav-user-photo" src="https://s3.amazonaws.com/poll-en-uploads/uploads%2F20160326T1029Z_f89f4455d3a6d644a97bd26d3413c76f%2F33977722078413.5630c445d9352.jpg" alt="Jason's Photo" />
									<span className="user-info">
										<small>Welcome,</small>
										Jason
									</span>

									<i className="ace-icon fa fa-caret-down"></i>
								</a>

								<ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
									<li>
										<a href="#">
											<i className="ace-icon fa fa-cog"></i>
											Settings
										</a>
									</li>

									<li>
										<a href="profile.html">
											<i className="ace-icon fa fa-user"></i>
											Profile
										</a>
									</li>

									<li className="divider"></li>

									<li>
										<a href="#">
											<i className="ace-icon fa fa-power-off"></i>
											Logout
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;