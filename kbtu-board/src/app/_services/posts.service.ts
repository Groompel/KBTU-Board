import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Post} from '../../mocks/post';
import {POSTS} from '../../mocks/mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  public getPostById(id: number, categoryId: number): Observable<any> {
    const posts = this.getCategory(categoryId);
    if (!posts) {
      return of(false);
    }
    return of(posts.find(p => p.id === id));
  }

  public getPostsByCategoryId(categoryId: number, subcategoryId): Observable<any> {

    const posts = this.getCategory(categoryId);
    if (!posts) {
      return of(false);
    }


    return of(posts.filter(post => post.subcategoryId === subcategoryId));
  }

  getCategory(categoryId) {
    if (categoryId === 1) {
      return POSTS.help;
    } else if (categoryId === 2) {
      return POSTS.lostAndFound;
    } else if (categoryId === 3) {
      return POSTS.study;
    } else {
      return false;
    }
  }

}
