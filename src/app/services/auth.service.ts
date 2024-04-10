import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setIsAuth(isAuth: boolean): void {
    if (isAuth) {
      localStorage.setItem("token", "token");
    } else {
      localStorage.clear();
    }
  }

  getIsAuth(): boolean {
    let token = localStorage.getItem("token");
    return token != null && token != "";
  }
}
