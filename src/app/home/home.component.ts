import {Component, OnInit} from '@angular/core';
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
}
