import { Component, OnInit } from '@angular/core';
import { PostModel } from '../posts/post.model';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {


  // PostModel: PostModel[] = [ new PostModel( 1, 'Rose', 'Bom dia!!',  13)]
  posts: PostModel[] = [
    new PostModel( 1, 'Rose', 'Bom dia!!',  13 ),
    new PostModel( 2 ,'Mario', 'Olá Pessoal', 9),
    new PostModel( 3 , 'João', 'Estou indo',11),
    new PostModel( 4 ,  'Pedro', 'Bom tarde!!', 23)
  ] 

  
  constructor() { }

  ngOnInit() {
  }

  filhoFoiClicado(dado){
    console.log(dado);
  }
}
