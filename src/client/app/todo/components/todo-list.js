import React, {PropTypes} from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        Todo list goes here
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default TodoList;