import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = "https://jsonplaceholder.typicode.com";
  readonly moreParams = ['test1', 'test2']; // values (constructor has key)
  readonly defaultImage = 'https://robohash.org/';
  
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`)
    .pipe(
      tap(users => console.log(users)),
      map(users => users.map(user => ({
        ...user,
        name: user.name.toUpperCase(),
        image: `${this.defaultImage}/${user.username.toLowerCase()}`,
        isAdmin: user.id === 10? 'admin' : 'user'
      })))
    );
  } 

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(users => console.log(users))
    );
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
