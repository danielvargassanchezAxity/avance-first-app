import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user = new User();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data["user"];
    this.user = data;
  }
}
