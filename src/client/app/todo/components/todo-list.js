import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class TodoList extends React.Component {
  constructor() {
    super();

    this.renderTodoRow = this.renderTodoRow.bind(this);
  }

  onTodoComplete(index, event) {
    this.props.onComplete(event.target.checked, index);
  }

  renderTodoRow(todo, index) {
    return (
      <tr key={index}>
        <td><Link to={`todo/edit/${index}`}>{todo.title}</Link></td>
        <td>{todo.description}</td>
        <td>{todo.date.toLocaleString()}</td>
        <td><input type="checkbox" value={todo.checked} onChange={this.onTodoComplete.bind(this, index)}></input></td>
      </tr>
    );
  }

  render() {
    let todoListContent = null;
    const emptyTodoListCount = 0;

    if (this.props.todos.length === emptyTodoListCount) {
      todoListContent = <div className="alert alert-warning">No todos.</div>;
    } else {
      todoListContent =
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th></th>
          </thead>
          <tbody>
            {this.props.todos.map(this.renderTodoRow)}
          </tbody>
        </table>;
    }

    return (
      <div className="todo-list">
      <h1>Todo List</h1>
        {todoListContent}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default TodoList;