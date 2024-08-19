import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  @Input() newDescription: string = '';
  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    this.addTask.emit(this.newDescription);
    this.newDescription = ''
  }
}
