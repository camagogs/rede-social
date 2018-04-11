import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { PostModel } from './post.model';


@Injectable()

export class PostService{
    
      url:string = "http://rest.learncode.academy/api/learncode/camargoredesocial";
      
      constructor(private http: Http ){}
      
      private  posts: PostModel[] = [];
      private post: PostModel;
      getPosts(){
        return this.http.get(this.url)
            .map((response:Response) => {
                this.posts = [];
                for(let b of response.json()){
                    this.posts.push(new PostModel (b.id, b.nomePessoa, b.texto ,b.qtdLikes))
            }
                return this.posts;
        })
        .catch((error: Response) => Observable.throw(error))
      }

    //   buscarPost(post){
    //      return this.http.get(this.url)
    //         .map((response:Response)=>{
    //             for(let b of response.json()){
    //                 if(b.id == post){
    //                     this.post = new PostModel(b.id , b.nomePessoa, b.texto, b.qtdLikes);    
    //                 }
    //             }
    //             return this.post;
    //         })
    //         .catch((error: Response) => Observable.throw(error))
    //   }
      inserirPost(post: PostModel){
        return this.http.post(this.url, post)
                .map((response: Response) =>  response.json())
                .catch((error: Response) => Observable.throw(error));
      }  
      excluirPost(post: PostModel){
        return this.http.delete(this.url + "/" + post.id)
            .map((response:Response) => response.text)
            .catch((error: Response) => Observable.throw(error));     
    }
    darLike(post){
        return  this.http.put(this.url + '/' + post.id, {id:post.id,nomePessoa:post.nomePessoa, texto:post.texto, qtdLikes:post.qtdLikes})
        .map((response: Response) => response)
        .catch((error: Response) => Observable.throw(error));
      }
      editarPost(post){
        return this.http.put(this.url + '/' + post.id, {id:post.id,nomePessoa:post.nomePessoa, texto:post.texto, qtdLikes:post.qtdLikes})
        .map((response: Response) => response)
        .catch((error: Response) => Observable.throw(error));
      }
}
