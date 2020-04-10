import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TeacherInfo, User} from '../_models/models';
import {AuthMockService} from '../_services/auth-mock.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  user: User;

  profileInfo = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required]
    ),
    gender: new FormControl(''),
    faculty: new FormControl('',
      [Validators.required]
    ),
    year: new FormControl(
      '',
      [Validators.required]
    ),
    subjects: new FormArray(
      [],
      [Validators.required],
    ),
    quote: new FormControl('',
      [Validators.minLength(5),
        Validators.maxLength(150)])
  });

  constructor(public authService: AuthMockService,
              private router: Router) {
  }

  get name() {
    return this.profileInfo.get('name');
  }

  get gender() {
    return this.profileInfo.get('gender');
  }

  get faculty() {
    return this.profileInfo.get('faculty');
  }

  get year() {
    return this.profileInfo.get('year');
  }

  get subjects(): FormArray {
    return this.profileInfo.get('subjects') as FormArray;
  }

  get quote() {
    return this.profileInfo.get('quote');
  }

  addSubject(subject: string) {
    this.subjects.push(new FormControl(subject, [Validators.required]));
  }

  submitForm() {
    this.user.name = this.name.value;
    this.user.info = new TeacherInfo(this.faculty.value,
      this.year.value,
      this.gender.value,
      this.subjects.controls.map(c => c.value),
      this.quote.value);
    console.warn(this.user);
    this.authService.setUser(this.user);
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(u => this.updateUser(u));
  }

  updateUser(user: User) {
    this.subjects.clear();
    this.user = user;
    this.name.setValue(user.name);
    if (user.info) {
      this.gender.setValue(user.info.gender);
      this.faculty.setValue(user.info.faculty);
      this.year.setValue(user.info.year_of_study);
      this.quote.setValue(user.info.quote);
      user.info.subjects.forEach(subject => this.addSubject(subject));
    }
  }
}
