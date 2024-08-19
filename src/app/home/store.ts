import {Action, createReducer, on} from '@ngrx/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO } from './actions';
import { Task } from "../models/task";
import { v4 as uuidv4 } from "uuid";

export interface IAppState {
  todos: Task[];
}

const initialState: IAppState = {
  todos: loadTodosFromLocalStorage(),
};

const _todosReducer = createReducer(
  initialState,
  on(ADD_TODO, (state, { description }) => ({
    todos: [
      ...state.todos,
      {
        id: uuidv4(),
        description,
        created_at: Date.now(),
        isComplete: false,
        isEditing: false
      } as Task
    ]
  })),
  on(TOGGLE_TODO, (state, { id }) => ({
    todos: state.todos.map((todo: Task) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    )
  })),
  on(REMOVE_TODO, (state, { id }) => ({
    todos: state.todos.filter((todo: Task) => todo.id !== id)
  })),
  on(EDIT_TODO, (state, { id, description }) => ({
    todos: state.todos.map((todo: Task) =>
      todo.id === id ? { ...todo, description } : todo
    )
  }))
);

export function todosReducer(state: IAppState | undefined, action: Action) {
  return _todosReducer(state, action);
}

function loadTodosFromLocalStorage(): Task[] {
  const todosJson = localStorage.getItem('todos');
  return todosJson ? JSON.parse(todosJson) : [];
}
