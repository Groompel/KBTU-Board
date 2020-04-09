import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
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
    return of(POSTS);
  }

  public removePost(post: Post) {
    return;
  }
}
