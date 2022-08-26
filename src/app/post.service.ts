import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './data/initialPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsAction = new BehaviorSubject(POSTS);
  private postsSubject = this.postsAction.asObservable();

  getPosts(): Observable<Post[]> {
    // const posts = of(POSTS);
    return this.postsSubject;
  }

  addPost(post: Post) {
    const currentValues = this.postsAction.getValue();
    const newValue = [...currentValues, post];
    this.postsAction.next(newValue);
  }

  constructor() { }
}
