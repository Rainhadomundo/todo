import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'todo-input',
  templateUrl: '/input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public title : BehaviorSubject<string> = new BehaviorSubject("Hello Angular");

  constructor() { }

  ngOnInit() {
  }

}
