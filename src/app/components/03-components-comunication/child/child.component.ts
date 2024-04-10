import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message = '';
  @Output() valueChange = new EventEmitter<string>();
  inputValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.valueChange.emit(this.inputValue);
  }
}
