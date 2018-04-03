import { Component, OnInit } from '@angular/core';

import { PostModel } from '../posts/post.model';
import { PostService } from '../posts/posts.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css'],
  providers: [PostService]
})
export class LinhaDoTempoComponent implements OnInit {

  posts: PostModel[]

  constructor( private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
  }           
  filhoFoiClicado(dado){
    this.postService.darLike(dado);
  }
  filhoFoiExcluido(dado){
    this.postService.excluirPost(dado.id);
    console.log(dado)
  }
  buscar(dado){
    console.log(this.postService.buscarPost(dado));
  }

}
