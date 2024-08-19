import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-generator',
  standalone: true,
  imports: [],
  templateUrl: './to-do-generator.component.html',
  styleUrl: './to-do-generator.component.css'
})
export class ToDoGeneratorComponent {
  @Input() newDescription: string = '';
  @Output() addTask = new EventEmitter<string>();
}
