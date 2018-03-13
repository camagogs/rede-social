import { Component, OnInit, Input } from '@angular/core';

import { PostModel } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  @Input post1: PostModel
  constructor() { }

  ngOnInit() {
  }

  curtiu(){
    
  }

}
