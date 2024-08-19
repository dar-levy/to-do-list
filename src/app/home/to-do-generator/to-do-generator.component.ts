import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Store } from '@ngrx/store';
import { ADD_TODO } from "../actions";
import { IAppState } from "../store";

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
  newDescription: string = '';

  constructor(private store: Store<{ todos: IAppState }>) {}

  addTodo() {
    if (!this.newDescription) return;

    this.store.dispatch(ADD_TODO({ description: this.newDescription }));

    this.newDescription = '';
  }
}
