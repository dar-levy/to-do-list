import { tassign } from 'tassign';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO} from './actions';
import {Task} from "../models/task";
import {v4 as uuidv4} from "uuid";

export interface IAppState {
  todos: any[];
}

export const INITIAL_STATE: IAppState = {
  todos: [],
}

export function rootReducer(state: IAppState, action: any): IAppState {
  switch (action.type) {
    case ADD_TODO:
      let newTodo: Task = {
        id: uuidv4(),
        description: action.description,
        created_at: Date.now(),
        isComplete: false,
        isEditing: false
      }

      return tassign(state, {
        todos: state.todos.concat(newTodo),
      });

    case TOGGLE_TODO:
      var todo = state.todos.find(t => t.id === action.id);

      var index = state.todos.indexOf(todo);

      return tassign(state, {
        todos: [
          ...state.todos.slice(0, index),
          tassign(todo, { isComplete: !todo.isComplete }),
          ...state.todos.slice(index + 1),
        ],
      });

    case EDIT_TODO:
      var todo = state.todos.find(t => t.id === action.id);

      var index = state.todos.indexOf(todo);

      return tassign(state, {
        todos: [
          ...state.todos.slice(0, index),
          tassign(todo, { description: action.description }),
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
