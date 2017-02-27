import React, { Component } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import TodoList from '../components/Body/todolist';
import ListItem from '../components/Body/listitem';

class Todo extends Component {
  render() {
    return(
      <div>
        <Header />
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
      </div>
    );
  }
};

export default Todo;
