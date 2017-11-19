import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const todoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];


@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoList$ : BehaviorSubject< any[]> = new BehaviorSubject< any[]>( todoList);

}
