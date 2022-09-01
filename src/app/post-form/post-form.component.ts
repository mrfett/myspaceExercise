import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from "../post.service";
import { Post } from '../post';

@Component({
  selector: '.app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  newPostForm = new FormGroup({
    postTitle: new FormControl(''),
    postText: new FormControl('')
  });

  submitPost() {
    const newDate = new Date();
    const newPost = {...new Post(), ...this.newPostForm.value, postDate: newDate};
    this.postService.addPost(newPost);

    this.newPostForm.reset();
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
