import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profileInfo = new FormGroup({
    name: new FormControl(),
    year: new FormControl(),
    faculty: new FormControl(),
    about: new FormControl()
  });

  constructor(public authService: AuthService) {
  }

  submitForm() {
    console.warn(this.profileInfo.value);
  }

  ngOnInit(): void {
  }

}
