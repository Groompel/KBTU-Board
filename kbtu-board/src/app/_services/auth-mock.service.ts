import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../_models/models';
import {USERS} from '../backend-data';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {

  public currentUser: BehaviorSubject<User>;
  private users;

  constructor(
    private apiService: ApiService
  ) {
    this.users = USERS;
    this.currentUser = new BehaviorSubject<User>(this.users[Math.floor(Math.random() * this.users.length)]);
  }

  public setUser(user: User) {
    this.currentUser.next(user);
  }
}
