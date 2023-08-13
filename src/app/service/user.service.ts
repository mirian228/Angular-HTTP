import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com";
  readonly moreParams = ['test1', 'test2'];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    let myHeaders = new HttpHeaders({'myheader': 'headervalue'});
    myHeaders = myHeaders.set('id', '1234');  // Overrides ( deletes older and sets new)
    myHeaders = myHeaders.append('id', '0000'); // Adds 
    const theParams = {['testList']: this.moreParams}
    let myParams = new HttpParams({fromObject: theParams}).set('page', 5).set('sort', 'true'); // baseurl/page=5&sort=true
    myParams = myParams.append('name', 'junior');  // baseurl/page=5&sort=true&name=junior
    return this.http.get<User[]>(`${this.baseUrl}/users`, {headers: myHeaders, params: myParams});
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
