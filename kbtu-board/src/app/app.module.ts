import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {AuthComponent} from './auth/auth.component';
import {NewPostComponent} from './new-post/new-post.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {SearchPageComponent} from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    PostDetailsComponent,
    ErrorPageComponent,
    FooterComponent,
    AuthComponent,
    NewPostComponent,
    AboutPageComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }