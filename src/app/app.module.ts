import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { routing } from './app.routing';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    PostsComponent,
    LinhaDoTempoComponent,
    PostInputComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    routing  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
