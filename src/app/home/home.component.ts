import {Component, OnInit} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '../models/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  newDescription: string = '';

  ngOnInit(): void {
    let savedTasks = localStorage.getItem('tasks')
    this.tasks = savedTasks ? JSON.parse(savedTasks) : []
  }

  addTask(newDescription: string) : void {
    if (newDescription.trim().length) {
      let newTask: Task = {
        id: uuidv4(),
        description: newDescription,
        created_at: Date.now(),
        isComplete: false,
        isEditing: false
      }

      this.tasks.unshift(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

      // TODO: this.notificationService.success("Task added successfully!");
    } else {
      // TODO: this.notificationService.alert("Task description cannot be empty.");
    }
  }

  deleteTask(id: string) : void {
    const originalLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);

    if (this.tasks.length < originalLength) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      // TODO: this.notificationService.success("Task deleted successfully!");
    } else {
      // TODO: this.notificationService.alert("Failed to delete task.");
    }
  }

}
