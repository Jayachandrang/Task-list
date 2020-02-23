import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

// Interface named as Todo
export interface Todo {
  title: string;
  date: string;
  banner: string; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  taskName = String;
  todoList = String;
  arr = [];

  // To do Task list - By default values
  public todo: Todo[] = [
    {
      title: 'Reboot the transmitter', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'FTP Capacitor', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'Neutral', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    }
  ];
  // In Progress Task list - By default values
  public inprogress: Todo[] = [
    {
      title: 'Protocol', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'SAS Interface', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'TCP Alarm', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    }
  ];
  // Done Task list - By default values
  public done: Todo[] = [
    {
      title: 'IP Driver', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'ADB Montior', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'SMTP Protocol', date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    }
  ];

  // On click of add task, on submit function will be invoked.
  onSubmit(f: NgForm) {
    this.arr = f.value;
    const todo = this.arr['taskName'];
    this.todo.push({
      title: todo, date: new Date().toString(),
      banner: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    });

  }
  // Drag and drop event between task lists
  drop(event: CdkDragDrop<{title: string, date: string, banner: string}[]>) {
    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex

      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}