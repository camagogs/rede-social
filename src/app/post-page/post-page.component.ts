import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostService } from  '../posts/posts.service';
import { PostModel } from '../posts/post.model';
import { LinhaDoTempoComponent } from '../linha-do-tempo/linha-do-tempo.component'
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  providers: [PostService]
})
export class PostPageComponent implements OnInit {

  constructor(private postService:PostService) { }
  posts: PostModel[]
  ngOnInit() {
  }
  
  submetido(post){
    this.postService.inserirPost(post);
    this.postService.getPost();
  }

}
