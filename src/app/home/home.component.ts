import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks: Task[] = [];
  newDescription: string = '';
}
