import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {select, Store} from '@ngrx/store';
import { ADD_TODO } from "../actions";
import {IAppState} from "../../app.state";
import {Observable} from "rxjs";
import {ToDo} from "../../models/to-do";

@Component({
  selector: 'to-do-generator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do-generator.component.html',
  styleUrls: ['./to-do-generator.component.css']
})
export class ToDoGeneratorComponent {
  todos$: Observable<ToDo[]>;
  newDescription: string = '';

  constructor(private store: Store<IAppState>) {
    this.todos$ = this.store.pipe(select((state: IAppState) => state.todos));
  }

  addTodo() {
    if (!this.newDescription) return;
    this.store.dispatch(ADD_TODO({ description: this.newDescription }));
    this.updateLocalStorage();
    this.newDescription = '';
  }

  private updateLocalStorage(): void {
    this.todos$.subscribe(todos => {
      localStorage.setItem('tasks', JSON.stringify(todos));
    }).unsubscribe();
  }
}
