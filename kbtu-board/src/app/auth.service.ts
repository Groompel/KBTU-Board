import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: boolean;

  constructor(private router: Router) {
  }

  redirect(route: string) {
    if (this.user) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
