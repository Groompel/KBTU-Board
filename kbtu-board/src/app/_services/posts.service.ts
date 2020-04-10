import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Post} from '../../mocks/post';
import {POSTS} from '../../mocks/mock-posts';
import {SECTIONS} from '../../mocks/mock-sections';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  posts = POSTS.map(p => p);
  postsSubject = new BehaviorSubject<Post[]>(POSTS);
  userPostsSubject = new BehaviorSubject<Post[]>(POSTS);

  public getPostById(id: number): Observable<Post> {
    return of(this.postsSubject.value.find(p => p.id === id));
  }

  public getPostsBySectionId(sectionId: number): Observable<Post[]> {
    return of(this.posts.filter(post => SECTIONS.find(sec => sec.sectionId === sectionId).postIdList.includes(post.id)));
  }

  public getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  public getUserPosts(userId: number): Observable<Post[]> {
    this.userPostsSubject.next(this.postsSubject.value.filter(p => p.user_id === userId));
    return this.userPostsSubject;
  }

  public removePost(post: Post) {
    this.userPostsSubject.next(this.userPostsSubject.value.filter(p => p.id !== post.id));
    this.postsSubject.next(this.postsSubject.value.filter(p => p.id !== post.id));
  }

  public createPost(post: Post) {
    let arr = this.postsSubject.value;
    arr.push(post);
    this.postsSubject.next(arr);
    arr = this.userPostsSubject.value;
    arr.push(post);
    this.userPostsSubject.next(arr);
    console.warn(this.userPostsSubject.value);
  }

  public savePost(post: Post) {
    let arr = this.userPostsSubject.value.filter(p => p.id !== post.id);
    arr.push(post);
    this.userPostsSubject.next(arr);
    arr = this.postsSubject.value.filter(p => p.id !== post.id);
    arr.push(post);
    this.postsSubject.next(arr);
  }

  public generatePostId() {
    let id: number;
    do {
      id = Math.floor(Math.random() * 1000);
    }
    while (this.postsSubject.value.find(p => p.id === id));
    return id;
  }
}
