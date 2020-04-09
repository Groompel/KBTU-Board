import {Component, OnInit} from '@angular/core';
import {PostsService} from '../_services/posts.service';
import {Post} from '../../mocks/post';
import {User} from '../_models/models';
import {AuthMockService} from '../_services/auth-mock.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  posts: Post[];
  user: User;

  constructor(
    public postsService: PostsService,
    public authService: AuthMockService) {
  }

  ngOnInit(): void {
    this.postsService.getUserPosts(1).subscribe(p => this.posts = p);
    this.authService.currentUser.subscribe(u => this.user = u);
  }

}
