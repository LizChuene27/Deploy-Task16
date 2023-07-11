
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './myacts';

const App = () => {
  const todos = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const content = prompt('Enter the todo content:');
    if (content) {
      dispatch(addTodo(content));
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="container">
      <h1 className="mt-4">Todo List</h1>
      <div className="my-4">
        {Object.entries(todos).map(([id, todo]) => (
          <div key={id} className="d-flex align-items-center mb-2">
            <div className={`mr-2 ${todo.completed ? 'text-decoration-line-through' : ''}`}>
              {todo.content}
            </div>
            <button
              className="btn btn-primary btn-sm mr-2"
              onClick={() => handleToggleTodo(id)}
            >
              Completed
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={e => e.preventDefault()} className="my-4">
        <div className="form-group">
          <input type="text" className="form-control" id="todoInput" />
        </div>
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default App;
