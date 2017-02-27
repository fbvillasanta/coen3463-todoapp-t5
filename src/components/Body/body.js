import React, { Component } from 'react';
import Footer from '../Footer/footer';
import TodoList from '../Body/todolist';
import ListItem from '../Body/listitem';

class Body extends Component {
  render() {
    return(
      <div className="main-container ace-save-state" id="main-container">
				<div className="main-content">
					<div className="main-content-inner">
            <div className="page-content">
              <TodoList />
            </div>
      		</div>
      	</div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default Body;
