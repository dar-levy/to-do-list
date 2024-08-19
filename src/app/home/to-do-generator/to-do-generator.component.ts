import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { NgRedux, select } from 'ng2-redux';
import {ADD_TODO} from "../actions";
import {IAppState} from "../store";


@Component({
  selector: 'to-do-generator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do-generator.component.html',
  styleUrl: './to-do-generator.component.css'
})
export class ToDoGeneratorComponent {
  newDescription: string = '';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo() {
    if (!this.newDescription) return;

    this.ngRedux.dispatch({ type: ADD_TODO, description: this.newDescription });

    this.newDescription = '';
  }
}
