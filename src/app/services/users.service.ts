import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUser, User } from '../models/user.model';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(Endpoints.users.get);
  }

  deleteUser(userId: string): Observable<void> {
    return this.httpClient.delete<void>(`${Endpoints.users.delete}/${userId}`);
  }

  createUser(user: BaseUser): Observable<User> {
    return this.httpClient.post<User>(Endpoints.users.get, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${Endpoints.users.delete}/${user.id}`, user);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${Endpoints.users.get}/${id}`)
  }
}
