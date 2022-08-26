import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PostService } from "../post.service";
import { Post } from "../post";
import { map } from "rxjs/operators";

@Component({
  selector: ".posts-list-component",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  postsSubject = new BehaviorSubject([
    {
      postTitle: "First Post!",
      postText: "This is my first post.",
      postDate: new Date("8-23-1978"),
    },
    {
      postTitle: "Second Post!",
      postText: `I travel through time.
      I can travel in all sorts of crazy ways, but I will take you back to something that happened over 10 years ago on a Tuesday morning.
      You're going to need to shut your brain off.
      Are you ready?
      Alright, go to 1996.
      I go into my first job at the Veejay Hotel in Baltimore, Maryland.`,
      postDate: new Date("8-1-80"),
    },
  ]);
  postsList$ = this.postsSubject.asObservable().pipe(
    map((rotatedPosts: []) =>
      rotatedPosts.map((post: Object) => {
        return {
          ...post,
          rotation: Math.random() * this.rotationScale - this.rotationScale / 2,
        };
      })
    )
  );

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  numListSubject = new BehaviorSubject([1, 2, 3, 4]);
  numListAction? = this.numListSubject.asObservable();

  // combinedPosts? = combineLatest(
  //   this.newPostsAction,
  //   this.existingPostsObservable
  // );

  postListWithRotation$ = this.postsList$.pipe(
    map((rotatedPosts: []) =>
      rotatedPosts.map((post: Post) => {
        console.log("Post", post);
        return {
          ...post,
          rotation: Math.random() * this.rotationScale - this.rotationScale / 2,
        };
      })
    )
  );

  rotationScale = 8;

  addPost = (newPost: Post) => {
    console.log("output", this.postsList$);
    const tempPost = {
      postTitle: "Test",
      postDate: new Date(),
      postText: "this is a test",
    };
    const currentValues = this.postsSubject.getValue();
    const newValues = [...currentValues, tempPost];
    console.log("new value", newValues);
    this.postsSubject.next(newValues);
  };

  addNewNum = () => {
    const newNum = Math.floor(Math.random() * 10);
    this.numListSubject.next([...this.numListSubject.getValue(), newNum]);
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
}