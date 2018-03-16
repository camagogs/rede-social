import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostModel } from './post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  @Input() PostModel: PostModel
  @Output() foiClicado = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  recebeuLike(){
    this.foiClicado.emit({mensagem: "o post " + this.PostModel.id + " fui clicado"});
  }

}
