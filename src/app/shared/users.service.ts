import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://localhost:3000';

  public logueado:boolean = false; 

  public user: User = {
    Id_user: 0,
    name: '',
    last_name: '',
    email: '',
    password: '',
    photo: ''
  };
  
  constructor(private http: HttpClient) {}

  register (user: User) {

    return this.http.post(`${this.apiUrl}/register`,user);

  }

  login (user: User) {

    return this.http.post(`${this.apiUrl}/login`,user);

  }

  edit (user:User){

    return this.http.put(`${this.apiUrl}/usuarios`,user);

  }

  getUser() {
    return this.http.post(`${this.apiUrl}/usuarios`, { Id_user: this.user.Id_user });
  }

}
