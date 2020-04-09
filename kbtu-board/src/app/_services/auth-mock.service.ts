import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../_models/models';
import {USERS} from '../backend-data';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private users;

  constructor(
    private apiService: ApiService
  ) {
    this.users = USERS;
    this.currentUser = of(this.users[Math.floor(Math.random() * this.users.length)]);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username, password): User {
    const user = this.users.find(u => u.username === username);
    if (user) {
      if (user.password === password) {
        this.currentUser = of(user);
        return user;
      }
    }
    return null;
  }
}
