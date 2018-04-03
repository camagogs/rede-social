import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostModel} from '../posts/post.model';


@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent  {

  @Output() newPost = new EventEmitter();
  nome_post: string
  texto_post: string

  constructor() { }

  onSubmit(event){
    event.preventDefault();
    this.newPost.emit(
      new PostModel(30,this.nome_post, this.texto_post, 0));
  }
}
