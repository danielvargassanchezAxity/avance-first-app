import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { MockUserFormComponent } from '../../mocks/components.mocks.html';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers', 'deleteUser', 'updateUser', 'createUser']);
    let user = new User();
    user.id = "test";
    userServiceSpy.getUsers.and.returnValue(of([user]));
    userServiceSpy.deleteUser.and.returnValue(of());
    userServiceSpy.updateUser.and.returnValue(of(user));
    userServiceSpy.createUser.and.returnValue(of(user));

    await TestBed.configureTestingModule({
      declarations: [UsersComponent, MockUserFormComponent],
      imports: [MatIconModule, RouterTestingModule],
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should delete user', () => {
    component.deleteUser("test");
    expect(userServiceSpy.deleteUser).toHaveBeenCalledWith("test");
  });

  it('should updateUser', () => {
    component.updateUser(new User());
    expect(userServiceSpy.updateUser).toHaveBeenCalled();
  });

  it('should saveUser with id null', () => {
    const user = new User();
    user.id = null;
    component.saveUser(user);
    expect(userServiceSpy.createUser).toHaveBeenCalled();
  });

  it('should saveUser with id', () => {
    const user = new User();
    user.id = "asd";
    component.saveUser(user);
    expect(userServiceSpy.updateUser).toHaveBeenCalled();
  });

  it('should changeSelectedUser', () => {
    component.selectedUser = new User();
    const newUser = new User();
    newUser.email = "test@test.com";
    component.changeSelectedUser(newUser);
    expect(component.selectedUser.email).toEqual("test@test.com");
  });
});
