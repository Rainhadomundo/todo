import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'todo-input',
  templateUrl: '/input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public title$: BehaviorSubject<string> = new BehaviorSubject("Hello Angular");

  constructor() { }

  ngOnInit() {
  }


  public changeTitle(newTitle: string): void {
    this.title$.next(newTitle);
  }
}
