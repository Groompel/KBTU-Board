import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {MakePostComponent} from './make-post/make-post.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {ProjectDescriptionComponent} from './project-description/project-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    PostsListComponent,
    PostDetailsComponent,
    MakePostComponent,
    LoginPageComponent,
    ErrorPageComponent,
    FooterComponent,
    ProjectDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
