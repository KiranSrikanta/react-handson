import React, {PropTypes} from 'react';
import TodoForm from './todo-form';

class TodoFormPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const todo = {
      title: '',
      description: '',
      date: new Date(),
      completed: false
    };

    // TODO: Code to get todo.

    this.state = { todo };
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo(todo) {
    // TODO: Code to save todo.
  }

  render() {
    return (
      <div className="todo-form-page container">
        <TodoForm todo={this.state.todo} onSave={this.saveTodo} />
      </div>
    );
  }
}

TodoFormPage.propTypes = { params: PropTypes.object };

export default TodoFormPage;