import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private user: User = {
      "id": 1,
      "name": "Mirian Surmanidze",
      "username": "Mirian",
      "email": "Sincere@april.biz",
      "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
      }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
      }
    };
  
    private user2: any = {
      "id": 9,
      "name": "GIORGI Surmanidze",
      "username": "giorgi",
      "email": "Sincere@april.biz",
    };
    


  
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //this.onUpdateUser();
    //this.onPatchUser();
    this.onGetUsers();
    //this.onDeleteUser();
    this.onGetUser();
    //this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      {
        next: (response) => {console.table(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('complete')},
      }
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      {
        next: (response) => {console.log(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('Done getting user')},
      }
    );
  }
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      {
        next: (response) => {console.log(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('Done creating user')},
      }
    );
  }
 
  onUpdateUser(): void {
    this.userService.updateUser(this.user2).subscribe(
      {
        next: (response) => {console.log(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('Done updating user')},
      }
    );
  }
  
  onPatchUser(): void {
    this.userService.updateUser(this.user2).subscribe(
      {
        next: (response) => {console.log(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('Done patching user')},
      }
    );
  }
  onDeleteUser(): void {
    this.userService.deleteUser(2).subscribe(
      {
        next: (response) => {console.log(response)},
        error: (error) => {console.log(error)},
        complete: () => {console.log('Done deleting user')},
      }
    );
  }





}
