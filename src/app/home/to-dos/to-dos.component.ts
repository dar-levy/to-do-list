import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Store, select } from '@ngrx/store';
import {EDIT_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions";
import { Task } from '../../models/task';
import { Observable } from 'rxjs';
import {IAppState} from "../store";

@Component({
  selector: 'to-dos',
  standalone: true,
  imports: [
    CdkDropList,
    NgClass,
    FormsModule,
    NgIf,
    NgForOf,
    CdkDrag,
    AsyncPipe
  ],
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent {
  todos$: Observable<Task[]>;

  constructor(private store: Store<IAppState>) {
    this.todos$ = this.store.pipe(select((state: IAppState) => state.todos));
  }

  toggleTodo(todoId: string): void {
    this.store.dispatch(TOGGLE_TODO({ id: todoId }));
  }

  removeTodo(todoId: string): void {
    this.store.dispatch(REMOVE_TODO({ id: todoId }));
  }

  editTodo(todo: Task): void {
    todo.isEditing = !todo.isEditing;
    this.store.dispatch(EDIT_TODO({ id: todo.id, description: todo.description }));
  }

  drop(event: CdkDragDrop<Task[]>): void {
    this.todos$.subscribe(todos => {
      const updatedTodos = [...todos];
      moveItemInArray(updatedTodos, event.previousIndex, event.currentIndex);
    }).unsubscribe();
  }
}
