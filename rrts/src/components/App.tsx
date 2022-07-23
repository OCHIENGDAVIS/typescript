import React from 'react';
import { connect } from 'react-redux';
import { TODO, fetchTodos, deleteTodo } from '../redux/actions';
import { StoreState } from '../redux/reducers';

interface AppProps {
  todos: TODO[];
  deleteTodo(id: number): void;
  fetchTodos(): void;
}

class App extends React.Component<AppProps> {
  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: TODO) => {
      return (
        <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={() => this.props.fetchTodos()}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: TODO[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
