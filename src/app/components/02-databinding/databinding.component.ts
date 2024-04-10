import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  interpolation = "Este dato viene desde la clase";
  value = 4;
  className = "test";
  disabledButton = false;
  inputValue = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeButtonStatus(): void {
    this.disabledButton = !this.disabledButton;
  }

  clearInput(): void {
    this.inputValue = "";
  }
}
