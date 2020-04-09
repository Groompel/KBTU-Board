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
    return of(this.posts.find(p => p.id === id));
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
}
