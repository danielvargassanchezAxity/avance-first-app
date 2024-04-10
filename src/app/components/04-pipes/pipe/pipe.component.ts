import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  today = new Date();
  message = "Hello world!"
  price = 99.99
  fruits = ["Apple","Watermelon","Orange",""]
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
