import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    let myHeaders = new HttpHeaders({'myheader': 'headervalue'});
    myHeaders = myHeaders.set('id', '1234');
    myHeaders = myHeaders.append('id', '0000');
    return this.http.get<User[]>(`${this.baseUrl}/users`, {headers: myHeaders});
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }
  
  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }

  

}
