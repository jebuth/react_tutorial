import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    // todo is a state of App (parent)
    // but here it is a prop. it will be passed as a prop
    // to TodoItem and will be a prop in TodoItem
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo}/>
    ));
  }
}

// Proptypes (good practice?)
Todos.propTypes ={
  todos: PropTypes.array.isRequired
}


export default Todos;
