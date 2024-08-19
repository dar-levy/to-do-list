import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "../store";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions";


@Component({
  selector: 'to-dos',
  standalone: true,
  imports: [
    CdkDropList,
    NgClass,
    FormsModule,
    NgIf,
    NgForOf,
    CdkDrag
  ],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.css'
})
export class ToDosComponent {
  @select() todos: any;
  @Output() editTask = new EventEmitter<string>();

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  toggleTodo(todoId: string): void {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todoId });
  }

  removeTodo(todoId: string): void {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todoId });
  }

  onEditTask(taskId: string) : void {
    this.editTask.emit(taskId);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
