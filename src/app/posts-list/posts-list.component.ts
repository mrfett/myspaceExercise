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

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  numListSubject = new BehaviorSubject([1, 2, 3, 4]);
  numListAction? = this.numListSubject.asObservable();

  rotationScale = 8;

  addNewPost = () => {
    const rotationScale = 2;
    const rotation = Math.random() * (rotationScale - (0 - rotationScale)) + (0 - rotationScale);
    const post = {
        postTitle: "Brand New Post!",
        postText: "This is a hardcoded post to show the add functionality. I think it is working great.",
        postDate: new Date(),
        rotation: rotation
    }
    this.postService.addPost(post);
  }

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
}