import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './data/initialPosts';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsAction; 
  private postsSubject;

  getPosts(): Observable<Post[]> {
    return this.postsSubject;
  }

  getXPosts(postCount?:number): Observable<Post[]> {
    if (!postCount) {
      console.log("No Count");
      return this.postsSubject;
    } else {
      return this.postsSubject.pipe(
        map((postArray:Post[]) => {
          return postArray.slice(0, postCount);
        })
      )
    }
    
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
    localStorage.setItem('posts', JSON.stringify(newValue));
    this.postsAction.next(newValue);
  }

  constructor() {
    const storedPosts = localStorage.getItem('posts');
    console.log("Stored Posts", JSON.parse(storedPosts));

    if (storedPosts === null) {
      this.postsAction = new BehaviorSubject(POSTS);
      this.postsSubject = this.postsAction.asObservable();
        
    } else {
      let posts = JSON.parse(storedPosts);
      posts.map((post) => {post.postDate = new Date(post.postDate)});
      console.log("Stored", posts);
      console.log("Original", POSTS);
      this.postsAction = new BehaviorSubject(posts);
      this.postsSubject = this.postsAction.asObservable();
    }
  }
}
