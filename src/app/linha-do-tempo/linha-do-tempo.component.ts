import { Component, OnInit } from '@angular/core';

import { PostModel } from '../posts/post.model';
import { PostService } from '../posts/posts.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  posts: PostModel[]

  constructor( private postService: PostService) { }

  ngOnInit() {
    this.fillTable();
  }
  
  fillTable() {
    this.postService.getPosts()
      .subscribe((data) => {
        this.posts = data;
      },
      (error) => console.log(error));
  }          

  filhoFoiClicado(dado){
    dado.qtdLikes = dado.qtdLikes + 1
    this.postService.darLike(dado)
      .subscribe(data=>{
        this.fillTable
      },
    error=>console.log(error));
  }
  filhoFoiExcluido(post: PostModel){
    this.postService.excluirPost(post)
      .subscribe(data=>{
        this.fillTable();
      },
      error=>console.log(error));
  }
  
  buscar(dado){
    console.log(this.postService.buscarPost(dado));
  }

}
