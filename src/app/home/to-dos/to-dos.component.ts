import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.css'
})
export class ToDosComponent {
  @Input() tasks!: any;
  @Output() deleteTask = new EventEmitter<string>();
  @Output() completeTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<string>();

  onDeleteTask(taskId: string) {
    this.deleteTask.emit(taskId);
  }

  onCompleteTask(taskId: string) {
    this.completeTask.emit(taskId);
  }

  onEditTask(taskId: string) : void {
    this.editTask.emit(taskId);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
