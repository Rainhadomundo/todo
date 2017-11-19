import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: '/input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    const newTitle = changes.title.currentValue;
    if (newTitle) {
      this.changeTitle(newTitle);
    }
  }

  @Input()
  public title: string;

  @Output()
  public onTitleChanged: EventEmitter<string> = new EventEmitter<string>();

  public title$: BehaviorSubject<string> = new BehaviorSubject("Hello Angular");

  constructor() { }

  ngOnInit() {
  }


  public changeTitle(newTitle: string): void {
    this.title$.next(newTitle);
  }
}
