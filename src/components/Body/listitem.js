import React, { Component } from 'react';

class ListItem extends Component {
	render() {

		return(
			<li className="">
        <div className="task-checkbox">
          <input type="checkbox" className="list-child" value=""  />
        </div>
        <div className="task-title">
          <span className="task-title-sp">Put something to do here.</span>
          <div className="pull-right hidden-phone">
              <button className="btn btn-primary btn-xs"><i className="fa fa-pencil"></i></button>
              <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o "></i></button>
          </div>
        </div>
	    </li>
		)
	}
}

export default ListItem;