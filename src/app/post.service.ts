import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './data/initialPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    return posts;
  }

  constructor() { }
}
