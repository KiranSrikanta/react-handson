import React from 'react';
import TodoList from './todo-list';

class TodoListPage extends React.Component {
  constructor() {
    super();

    this.onComplete = this.onComplete.bind(this);
    this.state = {
      todos: [
        {
          title: 'task1',
          description: 'important task',
          completed: false,
          date: new Date()
        },
        {
          title: 'task2',
          description: 'another important task',
          completed: false,
          date: new Date()
        }
      ]
    };
  }

  onComplete(isComplete, index) {
    const todos = this.state.todos;

    todos[index].completed = isComplete;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-list-page">
        <TodoList todos={this.state.todos} onComplete={this.onComplete}></TodoList>
      </div>
    );
  }
}

export default TodoListPage;