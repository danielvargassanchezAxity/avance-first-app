import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: string = "Hola que tal";
  color: string = "";

  constructor() { }
  ngOnInit(): void {
  }

  changeMessage(newColor: string): void {
    this.color = newColor;
  }
}
