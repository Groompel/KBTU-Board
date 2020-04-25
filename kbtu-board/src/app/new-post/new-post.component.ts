import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../_services/posts.service';
import {Post} from "../../mocks/post";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router) {
  }

  category = '';

  post = new FormGroup(
    {
      head: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40)
        ]),

      description: new FormControl('',
        [
          Validators.minLength(10),
          Validators.maxLength(200)
        ]),

      help: new FormGroup({
        reward: new FormControl(),
      }),

      lost: new FormGroup({
        date: new FormControl(),
        time: new FormControl(),
        place: new FormControl(),
        lostOrFound: new FormControl('',
          Validators.required)
      }),

      study: new FormGroup({
        subject: new FormControl(),
        reward: new FormControl('',
          [Validators.required])
      })
    }
  );

  get head() {
    return this.post.get('head');
  }

  get description() {
    return this.post.get('description');
  }

  get help() {
    return this.post.get('help');
  }

  get helpReward() {
    return this.help.get('reward');
  }

  get lost() {
    return this.post.get('lost');
  }

  get lostDate() {
    return this.lost.get('reward');
  }

  get lostTime() {
    return this.lost.get('time');
  }

  get lostPlace() {
    return this.lost.get('place');
  }

  get lostType() {
    return this.lost.get('lostOrFound');
  }

  get study() {
    return this.post.get('study');
  }

  get studySubject() {
    return this.study.get('subject');
  }

  get studyReward() {
    return this.study.get('subject');
  }

  disableButton(): boolean {
    return !this.post.valid;
  }

  submitForm() {
    const post: Post = {
      // user_id: this.authService.currentUser.value.id,
      description: this.description.value,
      header: this.head.value,
      id: this.postsService.generatePostId(),
      reward: '',
      views: 0
    };
    this.postsService.createPost(post);
    this.router.navigate(['/profile']);
  }

  ngOnInit()
    :
    void {
    this.openCategory('lost');
  }

  openCategory(category) {
    let i;
    let tabcontent;
    let tablinks;

    tabcontent = document.getElementsByClassName('content');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(category).style.display = 'block';
    document.getElementById(category).className += ' active';

    this.category = category;
    this.study.disable();
    this.lost.disable();
    this.help.disable();
    this.post.get(this.category).enable();
    const form = document.getElementsByTagName('FORM').item(0);
    if (category === 'study') {
      // @ts-ignore
      form.style.display = 'none';
    } else {
      // @ts-ignore
      form.style.display = 'block';
    }
  }
}
