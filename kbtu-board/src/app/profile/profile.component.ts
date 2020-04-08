import {Component, OnInit} from '@angular/core';
import {User} from '../../assets/interfaces/user';
import {PostsService} from '../posts.service';
import {Post} from '../../mocks/post';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  posts: Post[];

  user: User = {
    name: 'Василий Петрович',
    login: 'vasek2000',
    password: 'ao#7@fD92!',
    telegram: 'vasek2000',
    avatar: ''
  };

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getUserPosts(1).subscribe(p => this.posts = p);
  }

}
