import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './data/initialPosts';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsAction = new BehaviorSubject(POSTS);
  private postsSubject = this.postsAction.asObservable();

  getPosts(): Observable<Post[]> {
    return this.postsSubject;
  }

  addPost(post: Post) {
    const currentValues = this.postsAction.getValue();
    let rotatedPost = {...post};
    if (!post.hasOwnProperty("rotation")) {
      const rotationScale = 2;
      const randomRotation = Math.random() * (rotationScale - (0 - rotationScale)) + (0 - rotationScale);
      rotatedPost = {...post, rotation: randomRotation};
    } 
    const newValue = [...currentValues, rotatedPost];
    this.postsAction.next(newValue);
  }

  constructor() { }
}
