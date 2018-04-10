import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgIf } from '@angular/common';

import { PostService } from  '../posts/posts.service';
import { PostModel } from '../posts/post.model';
import { LinhaDoTempoComponent } from '../linha-do-tempo/linha-do-tempo.component'
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: PostModel = new PostModel('', '', '',0);
  id_s: boolean = false
  constructor(
    private postService:PostService,
    private route: ActivatedRoute,
    private location: Location 
  ) { }
  
  posts: PostModel[]
  ngOnInit() {
    this.route.params.forEach((params: Params )=>{
      let id = params['id'];
      if(id!= undefined){
        this.id_s = true;
      }
      this.postService.buscarPost(id)
      .subscribe((res) =>{
           this.post = res
    })   
  });
}
  
  submetido(post: PostModel){
    this.postService.inserirPost(post)
      .subscribe((data) => {

      },
        (error) => console.log(error));
  }

  filhoFoiAtualizado(post: PostModel){
    this.postService.editarPost(post)
    .subscribe((data)=>{
      
    },
    (error) => console.log(error));
  }

}
