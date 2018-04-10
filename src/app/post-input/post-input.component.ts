import { Component, EventEmitter, Output, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostModel} from '../posts/post.model';


@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent  {

  @Output() newPost = new EventEmitter();
  @Output() FoiAtualizado = new EventEmitter();
  @Input() Post: PostModel;
  @Input() idRota: boolean
  nome_post: string
  texto_post: string

  constructor() { }
  
  onSubmit(event){
    if (this.idRota){
      event.preventDefault();
      this.Post.texto = this.texto_post;
      this.Post.nomePessoa = this.nome_post;
      this.texto_post = ''
      this.nome_post = ''
      this.FoiAtualizado.emit(
        this.Post);        
    }
    else{
      event.preventDefault();
      this.newPost.emit(
      new PostModel('',this.nome_post, this.texto_post, 0));
    }
    
  }

  
}
