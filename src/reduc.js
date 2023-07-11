// reducer.js

const initialTodoState = {
    nextId: 2,
    data: {
      1: {
        content: 'Content 1',
        completed: false
      }
    }
  };
  
  const reducer = (state = initialTodoState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const newId = state.nextId;
        const newTodo = {
          content: action.payload,
          completed: false
        };
        return {
          ...state,
          nextId: newId + 1,
          data: {
            ...state.data,
            [newId]: newTodo
          }
        };
      case 'DELETE_TODO':
        const deleteId = action.payload;
        const newData = { ...state.data };
        delete newData[deleteId];
        return {
          ...state,
          data: newData
        };
      case 'TOGGLE_TODO':
        const toggleId = action.payload;
        return {
          ...state,
          data: {
            ...state.data,
            [toggleId]: {
              ...state.data[toggleId],
              completed: !state.data[toggleId].completed
            }
          }
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  