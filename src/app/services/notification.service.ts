import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private options: any = {
    duration: 3000,
    gravity: "top",
    position: "right",
  };

  success(description: string): void {
    Toastify({
      ...this.options,
      text: description,
      backgroundColor: "green",
    }).showToast();
  }

  error(description: string): void {
    Toastify({
      ...this.options,
      text: description,
      backgroundColor: "red",
    }).showToast();
  }
}
