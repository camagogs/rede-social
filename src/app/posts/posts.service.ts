import { Injectable } from '@angular/core';

import { PostModel } from './post.model';


@Injectable()

export class PostService{
    private  posts: PostModel[] = [
        new PostModel( 1, 'Rose', 'Bom dia!!',  0 ),
        new PostModel( 2 ,'Mario', 'Olá Pessoal', 0),
        new PostModel( 3 , 'João', 'Estou indo',0),
        new PostModel( 4 ,  'Pedro', 'Bom tarde!!', 0)
      ];
    
      getPost(){
          return this.posts;
      } 
      buscarPost(post){
          for(let i of this.posts){
              if (i == post){
                  return i.id;
              }
          }
      }
      inserirPost(post){
        this.posts.push(post);
        console.log(this.posts);
      }  
      excluirPost(id){
        for(let i of this.posts){
            if (i.id == id){
                var index = this.posts.indexOf(i);
                if (index > -1) {
                    this.posts.splice(index, 1);
                }
            }
        }
    }
      darLike(post){   
        post.qtdLikes = post.qtdLikes +=1;
      }
}
