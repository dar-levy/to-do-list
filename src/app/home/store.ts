import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

export interface IAppState {
  todos: any[];
}

export const INITIAL_STATE: IAppState = {
  todos: [],
}

export function rootReducer(state: IAppState, action: any): IAppState {
  switch (action.type) {
    case ADD_TODO:
      var newTodo = { id: state.todos.length + 1, title: action.title };

      return tassign(state, {
        todos: state.todos.concat(newTodo),
      });

    case TOGGLE_TODO:
      var todo = state.todos.find(t => t.id === action.id);

      var index = state.todos.indexOf(todo);

      return tassign(state, {
        todos: [
          ...state.todos.slice(0, index),
          tassign(todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1),
        ],
      });

    case REMOVE_TODO:
      return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
      });
  }

  return state;
}
