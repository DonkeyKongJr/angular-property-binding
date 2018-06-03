import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentInput: string;
  @Output() childOutput = new EventEmitter<string>();
  childTextValue = '';

  constructor() { }

  ngOnInit() {
  }

  updateOutput(value) {
    this.childOutput.emit(value);
  }
}
