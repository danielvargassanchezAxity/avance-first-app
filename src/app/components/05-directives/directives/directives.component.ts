import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  showMessage = false;
  selectedOption = ''
  products = [
    {
      id: 1,
      name: "Apple",
      price: 10.0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngnx0__0QqO6lNEqWIjngXj8VTNnLl1EYatUm4KP9Fw&s'
    },
    {
      id: 2,
      name: "Soda",
      price: 29.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEXvdt2FQlWKOWt7gNxPwkzrLXSgG9aM2DC_4ZK38TQ&s'
    },
    {
      id: 3,
      name: "Tortillas",
      price: 25.50,
      image: 'https://thumbs.dreamstime.com/b/pila-de-historieta-del-icono-de-las-tortillas-88455991.jpg'
    },
  ];

  users = [
    {
      userId: 0,
      name: "Daniel",
      age: 27,
    },
    {
      userId: 1,
      name: "Erika",
      age: 21,
    },
    {
      userId: 2,
      name: "Pedro",
      age: 30,
    },
  ];

  isWarning = false;
  fruits = ["Apple", "Orange", "Watermelon"];
  vegetables = ["Brocoli", "Lechuga", "Zanahoria"]
  constructor() { }

  ngOnInit(): void {
  }

}
