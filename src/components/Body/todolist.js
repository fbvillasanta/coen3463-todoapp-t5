import React, { Component } from 'react';
import ListItem from '../Body/listitem';

class TodoList extends Component {
	render() {
		return(
			<div className="row">
				<div className="col-xs-offset-3 col-xs-6">
					<h1 id="todoTitle">TODOS</h1>
					<div className="widget-box">
						<div className="widget-body">
							<div className="widget-main">
								<form className="form-inline">
									<div className="input-group">
										<input className="form-control" type="text" size="50" placeholder="What needs to be done?" />
										<span className="input-group-btn">
											<button className="btn btn-sm btn-primary" type="button">
												<i className="ace-icon fa fa-calender bigger-100"></i>
												Add task
											</button>
										</span>
									</div>
									&nbsp;
									<button className="btn btn-sm btn-danger" type="button">Delete Completed</button>
								</form>
								<h1 id="status">Status: <span id="finished">0</span> of <span id="total">8</span></h1>
								<div className="tabbable">
									<ul className="nav nav-tabs" id="myTab">
										<li className="active">
											<a data-toggle="tab" href="#all">
												<i className="blue ace-icon fa fa-bookmark bigger-120"></i>
												All
											</a>
										</li>

										<li>
											<a data-toggle="tab" href="#active">
												Active &nbsp;
												<span className="badge badge-warning">4</span>
											</a>
										</li>

										<li>
											<a data-toggle="tab" href="#completed">
												Completed &nbsp;
												<span className="badge badge-success">6</span>
											</a>
										</li>
									</ul>

									<div className="tab-content">
										<div id="all" className="tab-pane fade in active tasks-widget">
											<div className="task-content">
												<ul className="task-list">
													<ListItem />
												</ul>
											</div>
										</div>

										<div id="active" className="tab-pane fade tasks-widget">
											<div className="task-content">
												<ul className="task-list">
													<ListItem />
												</ul>
											</div>
										</div>

										<div id="completed" className="tab-pane fade tasks-widget">
											<div className="task-content">
												<ul className="task-list">
													<ListItem />
											  </ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TodoList;