import { createAction, props } from '@ngrx/store';

export const ADD_TODO = createAction(
  '[ToDo] Add ToDo',
  props<{ description: string }>()
);

export const TOGGLE_TODO = createAction(
  '[ToDo] Toggle ToDo',
  props<{ id: string }>()
);

export const REMOVE_TODO = createAction(
  '[ToDo] Remove ToDo',
  props<{ id: string }>()
);

export const EDIT_TODO = createAction(
  '[ToDo] Edit ToDo',
  props<{ id: string, description: string }>()
);
