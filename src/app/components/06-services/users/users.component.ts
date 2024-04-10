import { Component, OnInit } from '@angular/core';
import { BaseUser, User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedUser = new User();
  users: User[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }


  deleteUser(userId: string): void {
    this.usersService.deleteUser(userId).subscribe(() => {
      this.getUsers();
    });
  }

  saveUser(user: User): void {
    this.selectedUser.id = null;
    if (user.id === null) {
      this.save(user);
    } else {
      this.updateUser(user);
    }
  }
  updateUser(user: User): void {
    this.usersService.updateUser(user).subscribe(() => {
      this.getUsers();
    });
  }
  save(user: User): void {
    const { id, ...baseUserData } = user;
    const baseUser = new BaseUser();
    Object.assign(baseUser, baseUserData)

    this.usersService.createUser(baseUser).subscribe(res => {
      this.getUsers();
    });
  }

  changeSelectedUser(user: User): void {
    this.selectedUser = user;
  }
}
